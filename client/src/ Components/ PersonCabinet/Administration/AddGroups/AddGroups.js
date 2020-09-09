import React, {Component} from "react";
import './AddGroups.css'
import Activity from "./Activity/Activity"
import makeAnimated from 'react-select/animated';
import {PlusCircleOutlined} from '@ant-design/icons'
import { Input } from 'antd';
import {Select} from "antd";
import { Button, Space } from 'antd';

const { TextArea } = Input;
const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
class AddGroups extends React.Component {
    state = {
        actions: '',
        workers: '',
        select_actions:[],
        select_workers:[],
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
        fetch("http://127.0.0.1:8000/workers/all/simple", requestOptions)
            .then(response =>  response.json())
            .then(result => {
                console.log(result)
                let workers = Array.from(result)
                let a = workers.pop()
                for(let i =0;i<1500;i++){
                    workers.push(a)
                }

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
        console.log(this.state.select_workers,this.state.select_actions,nameGroup)
        if(this.state.select_workers.length !== 0 &
            this.state.select_actions.length !== 0 &
            nameGroup !=='') {
            document.querySelector('.error-add-group').style.display = 'none'
            let token = localStorage.getItem('token')
            let myHeaders = new Headers();
            myHeaders.append("Authorization", token);

            let formdata = new FormData();
            console.log()
            formdata.append("name", nameGroup);
            formdata.append("actions", this.state.select_actions.join(' '));
            formdata.append("description", document.querySelector('#description').value);
            formdata.append("participants", this.state.select_workers.join(' '));
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
        else{
            console.log(document.querySelector('.error-add-group').style.display = 'block')
        }
    }
    addActions=(event)=>{
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
                    <div className="col-lg-12">
                        <h4 className="text-left">Новая группа</h4>
                        <div className="row no-gutters border rounded overflow-hidden flex-lg-row mb-4 shadow-sm h-lg-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <div className="input-group mb-3 input-group-lg">
                                    <label className="napr col-sm-4 text-right" style={{fontSize: "16px"}}>Название группы
                                    </label>
                                    <Input id="nameGroup" placeholder="Введите название группы" className="col-md-6"/>
                                </div>
                                {/* <div className={'error-label'}>Введите название группы</div> */}
                                {/* <div>Группа с таким названием уже существует</div> */}

                                <div className="input-group mb-3 input-group-lg">
                                    <label className="napr col-sm-4 text-right" style={{fontSize: "16px"}}>Действия</label>
                                    <Select
                                        onChange = {this.addActions}
                                        closeMenuOnSelect={false}
                                        mode="multiple"
                                        components={animatedComponents}
                                        isMulti
                                        options={this.state.actions}
                                        placeholder="Выбрать"
                                        style={{width:"50%"}}
                                        className="text-left"
                                    >
                                        {children}
                                    </Select>
                                </div>
                                {/* <div>Введите название группы</div> */}
                                <div className="input-group mb-3 input-group-lg">
                                    <label className="napr col-sm-4 text-right" style={{fontSize: "16px"}}>Участники</label>
                                    <Select
                                        onChange = {this.addWorkers}
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        mode="multiple"
                                        isMulti
                                        options={this.state.workers}
                                        placeholder="Выбрать"
                                        style={{width:"50%"}}
                                        className="text-left"
                                    />
                                </div>
                                {/* <div>Введите название группы</div> */}
                                <div className="input-group mb-3 input-group-lg">
                                    <label className="napr col-sm-4 text-right" style={{fontSize: "16px"}}>Описание</label>
                                    <TextArea
                                        // value={value}
                                        id={'description'}
                                        placeholder="Введите описание"
                                        autoSize={{ minRows: 3, maxRows: 5 }}
                                        style={{width:"50%"}}
                                    />
                                </div>
                                <div className="error-add-group">Введите все поля</div>
                                <div className="col-md-12 text-right" style={{marginTop:"20px",marginLeft:"-150px"}}>
                                    <Button onClick={this.createGroup} style={{backgroundColor:"#1890ff"}}>Отправить</Button>
                                    <Button onClick={()=>{document.location='view_groups'}} style={{backgroundColor:"#e6f7ff",marginLeft:"5px"}}>Назад</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default AddGroups