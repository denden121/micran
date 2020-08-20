import React, {Component} from "react";
import './AddGroups.css'
import Activity from "./Activity/Activity"
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {PlusCircleOutlined} from '@ant-design/icons'
import { Input } from 'antd';
// import {Select} from "antd";
import { Button, Space } from 'antd';

const { TextArea } = Input;
class AddGroups extends React.Component {
    state = {
        actions: '',
        workers: '',
        select_actions:{},
        select_workers:{},
        value:''
    }
    componentDidMount() {
        this.loadActions()
        this.loadWorkers()
    }
    loadActions= () => {
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        fetch("http://127.0.0.1:8000/actions/", requestOptions)
            .then(response =>  response.json())
            .then(result => {
                let actions = Array.from(result).map((action)=>{
                    console.log(action)
                    return {value:`${action.pk}`,label:`${action.name}`}
                })
                this.setState({actions: actions})})
            .catch(error => console.log('error', error))
    }
    loadWorkers= () =>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
<<<<<<< HEAD
        fetch("http://127.0.0.1:8000/workers/all/simple/", requestOptions)
=======
        fetch("http://127.0.0.1:8000/workers/all/simple", requestOptions)
>>>>>>> d86ff0fef405c43adb32161412fb075a3d6d2e06
            .then(response =>  response.json())
            .then(result => {
                console.log(result)
                let workers = Array.from(result)
                workers = workers.map((worker)=>{
                    return {value:`${worker.pk}`,label:`${worker.full_name}`}
                })
                this.setState({workers: workers})})
            .catch(error => console.log('error', error))
    }
    createGroup = async () => {
        console.log('actions',this.state.select_actions)
        console.log('workers',this.state.select_workers)
        let nameGroup = document.querySelector('#nameGroup').value

        let token = localStorage.getItem('token')
        let myHeaders = new Headers();
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

        fetch("http://127.0.0.1:8000/groups/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        document.location = 'view_groups'
    }
    addActions=(event)=>{
        this.setState({select_actions:event})
    }
    addWorkers=(event)=>{
        this.setState({select_workers:event})
    }


    render() {
        const animatedComponents = makeAnimated();
        return (
            <div className="container-fluid">
                <div className="label row">                
                    <label className="text-left col-md-12">
                        <PlusCircleOutlined style={{float:"left",fontSize:"23px",padding:"2px"}}/>
                        <h4>Новая группа</h4>
                        <hr className="normal hr"/>
                    </label>                    
                </div>
                <div className="row">
                    <div className="col-md-9 col-lg-12">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <div className="row">
                                    <div className="col-md-5 text-center">                                        
                                         <label>Название группы</label>                                                                                 
                                    </div>
                                    <div className="col-md-7 text-center">
                                    <Input id="nameGroup" placeholder="Введите название группы" style={{marginLeft:"-200px"}}/>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="col-md-5 text-center">
                                        <label>Действия</label>                                        
                                    </div>
                                    <div className="col-md-7 text-center" style={{marginLeft:"-100px"}}>
                                    <Select 
                                        onChange = {this.addActions}
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        isMulti
                                        options={this.state.actions}
                                        placeholder="Выбрать"
                                        style={{width:"100%",marginLeft:"-200px"}}
                                        className="text-left"
                                        
                                    />
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="col-md-5 text-center">
                                        <label>Участники</label>                                        
                                    </div>
                                    <div className="col-md-7 text-center" style={{marginLeft:"-100px"}}>
                                    <Select
                                        onChange = {this.addWorkers}
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        isMulti
                                        options={this.state.workers}
                                        placeholder="Выбрать"
                                        style={{width:"100%",marginLeft:"-200px"}}
                                        className="text-left"
                                    />
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="col-md-5 text-center">
                                        <label>Описание</label>
                                    </div>
                                    <div className="col-md-7 text-center">
                                        <TextArea
                                            // value={value}
                                            onChange={this.onChange}
                                            placeholder="Введите описание"
                                            autoSize={{ minRows: 3, maxRows: 5 }}
                                            style={{width:"100%",marginLeft:"-200px"}}
                                        />
                                    </div>                                       
                                    <div className="col-md-12 text-right" style={{marginTop:"20px",marginLeft:"-100px"}}>
                                        <Button onClick={this.createGroup} style={{backgroundColor:"#1890ff"}}>Отправить</Button>
                                        <Button onClick={()=>{document.location='view_groups'}} style={{backgroundColor:"#e6f7ff",marginLeft:"5px"}}>Назад</Button>
                                    </div>                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // <div className="container-fluid">
            //     <div className="row">
            //         <div className="col-md-6">
            //             <div className="form-group">
            //                 <div className="row">
            //                     <label className="col-md-4"><strong>Название группы</strong></label>
            //                 </div>
            //                 <input  id="nameGroup" type="text" className="form-control" placeholder="Новая группа"/>
            //                 <br/>
            //                 {/*<div className="form-check">*/}
            //                 {/*    <Activity actions={this.state.actions}/>*/}
            //                 {/*</div>*/}
            //                 <div className="row">
            //                     <label className="col-md-2"><strong>Действия</strong></label>
            //                 </div>
            //                 <Select
            //                     onChange = {this.addActions}
            //                     closeMenuOnSelect={false}
            //                     components={animatedComponents}
            //                     isMulti
            //                     options={this.state.actions}
            //                     placeholder="Выбрать"
            //                  />                                                       
            //                 <br/>
            //                 <div className="row">
            //                     <label className="col-md-2"><strong>Участники</strong></label>
            //                 </div>
            //                 <Select
            //                     onChange = {this.addWorkers}
            //                     closeMenuOnSelect={false}
            //                     components={animatedComponents}
            //                     isMulti
            //                     options={this.state.workers}
            //                     placeholder="Выбрать"
            //                 />
            //                 <br/>
            //                 <div className="row">
            //                     <label className="col-md-2"><strong>Описание</strong></label>
            //                 </div>
            //                 <textarea
            //                     className="form-control"
            //                     maxlength="10000"
            //                     placeholder="Введите текст..."
            //                     rows="3">
            //                 </textarea>
            //                 <br/>
            //                 <button className="btn btn-sm btn-primary groupps" type='submit'
            //                         onClick={this.createGroup}>Отправить
            //                 </button>
            //                 <br/>
            //                 <br/>
            //                 <button onClick={()=>{document.location='view_groups'}} className="btn btn-sm btn-primary groupps">Назад</button>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default AddGroups