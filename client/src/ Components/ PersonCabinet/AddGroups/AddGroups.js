import React,{Component} from "react";
import './AddGroups.css'
import Activity from "./Activity/Activity"
import BrowseReports from '../BrowseReports/BrowseReports'

class AddGroups extends React.Component{
    state = {
        actions:{}
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
            .then(response => response.json())
            .then(result => this.setState({actions:result}))
            .catch(error => console.log('error', error))
        // console.log(this.state.actions[0].fields.action)
    }
    createGroup =async ()=> {
        let $activities = document.querySelectorAll('.activity')
        let result = []
        $activities.forEach(value => {
            if (value.checked) {
                result.push(value.id.split('_')[1])
            }
        })
        let nameGroup = document.querySelector('#nameGroup').value
        console.log(result,nameGroup)
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
    }
    render() {
        return(
            <div className="container">
                <div className="form-group">
                    <label for="GroupName">Название группы</label>
                        <input id = "nameGroup" type="text" className="form-control"/>
                        <div className="form-check">
                        <Activity actions={this.state.actions}/>
                        </div>
                        <button className="btn btn-sm btn-primary" type='submit' onClick={this.createGroup}>Отправить</button>
                </div>
            </div>
        )
    }
}

export default AddGroups