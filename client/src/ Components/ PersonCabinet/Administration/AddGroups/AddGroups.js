import React, {Component} from "react";
import './AddGroups.css'
import Activity from "./Activity/Activity"
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

class AddGroups extends React.Component {
    state = {
        actions: {}
    }

    async componentDidMount() {
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        await fetch("http://127.0.0.1:8000/actions/", requestOptions)
            .then(response =>  response.json())
            .then(result => this.setState({actions: result}))
            .catch(error => console.log('error', error))
        console.log('state',this.state.actions)
    }

    createGroup = async () => {
        let $activities = document.querySelectorAll('.activity')
        let result = []
        $activities.forEach(value => {
            if (value.checked) {
                result.push(value.id.split('_')[1])
            }
        })
        let nameGroup = document.querySelector('#nameGroup').value
        console.log(result, nameGroup)
        let myHeaders = new Headers();
        let token = localStorage.getItem('token')
        myHeaders.append("Authorization", token);
        var formdata = new FormData();
        formdata.append("actions", result.join(' '));
        formdata.append("name", nameGroup);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        await fetch("http://127.0.0.1:8000/groups/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        document.location = 'view_groups'
        alert('группа создана')
    }


    render() {
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]
        const animatedComponents = makeAnimated();
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="row">
                                <label className="col-md-4"><strong>Название группы</strong></label>
                            </div>
                            <input  id="nameGroup" type="text" className="form-control" placeholder="Новая группа"/>
                            <br/>
                            <div className="form-check">
                                <Activity actions={this.state.actions}/>
                            </div>
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                isMulti
                                options={options}
                            />
                            <br/>
                            <button className="btn btn-sm btn-primary groupps" type='submit'
                                    onClick={this.createGroup}>Отправить
                            </button>
                            <button onClick={()=>{document.location='view_groups'}}>Назад</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddGroups