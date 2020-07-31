import React, {Component} from "react";
import './AddGroups.css'
import Activity from "./Activity/Activity"
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

class AddGroups extends React.Component {
    state = {
        actions: {},
        workers: {},
        select_actions:{},
        select_workers:{}
    }
    componentDidMount() {
        this.loadActions()
        this.loadWorkers()
    }
    loadActions= async () => {
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
        let temp = Array.from(this.state.actions)
        temp = temp.map((action)=>{
            console.log(action)
            return {value:`${action.pk}`,label:`${action.fields.action}`}
        })
        this.setState({actions:temp})
    }
    loadWorkers= async () =>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        await fetch("http://127.0.0.1:8000/workers/", requestOptions)
            .then(response =>  response.json())
            .then(result => this.setState({workers: result}))
            .catch(error => console.log('error', error))
        console.log('state',this.state.workers)
        let temp = Array.from(this.state.workers)
        temp = temp.map((worker)=>{
            console.log(worker)
            return {value:`${worker.pk}`,label:`${worker.fields.first_name}`}
        })
        this.setState({workers:temp})
        console.log('state',this.state.workers)

    }
    createGroup = async () => {
        console.log(this.state.select_actions)
        console.log(this.state.select_workers)
        let nameGroup = document.querySelector('#nameGroup').value
        // console.log(result, nameGroup)
        let myHeaders = new Headers();
        let token = localStorage.getItem('token')
        myHeaders.append("Authorization", token);
        let workers = []
        for(let i of this.state.select_workers){
            workers.push(i.value)
        }
        workers =workers.join(' ')
        let actions = []
        for(let i of this.state.select_actions){
            actions.push(i.value)
        }
        actions =actions.join(' ')
        console.log(workers,actions)
        let formdata = new FormData();
        formdata.append("name", nameGroup);
        formdata.append("actions", actions);
        formdata.append("description", 'ffdsfds');
        formdata.append("participants", workers);
        let requestOptions = {
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
    }
    addActions=(event)=>{
        console.log(event)
        this.setState({select_actions:event})
    }
    addWorkers=(event)=>{
        console.log(event)
        this.setState({select_workers:event})
    }


    render() {
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
                            {/*<div className="form-check">*/}
                            {/*    <Activity actions={this.state.actions}/>*/}
                            {/*</div>*/}
                            <Select
                                onChange = {this.addActions}
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                isMulti
                                options={this.state.actions}
                                placeholder="Действия"
                             />                                                       
                            <br/>
                            <Select
                                onChange = {this.addWorkers}
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                isMulti
                                options={this.state.workers}
                                placeholder="Участники"
                            />
                            <br/>
                            <button className="btn btn-sm btn-primary groupps" type='submit'
                                    onClick={this.createGroup}>Отправить
                            </button>
                            <br/>
                            <br/>
                            <button onClick={()=>{document.location='view_groups'}} className="btn btn-sm btn-primary groupps">Назад</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddGroups