import React from "react"
import {Card,Form,Input,Select} from "antd"
import Actions from "./Actions"
import "./AddGroups.css"
// import Activity from "./Activity/Activity"
import makeAnimated from 'react-select/animated';
// import {PlusCircleOutlined} from '@ant-design/icons'
import { Button, Space } from 'antd';

const { TextArea } = Input;
const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class AddGroups extends React.Component{
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
    onChangeCheckBox=(e)=>{
        console.log(e.target.checked)
        let temp = [...this.state.select_actions]
        if(e.target.checked){
            temp.push(e.target.value)
        }else{
            temp.splice(temp.indexOf(e.target.value),1)
        }
        this.setState({select_actions:temp})
        console.log(this.state)
        console.log(e.target.value)
    }
    loadActions=() => {
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        fetch("http://127.0.0.1:8000/groups/actions/", requestOptions)
            .then(response =>  response.json())
            .then(result => {
                console.log('result',result)
                this.setState({actions: result})})
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
    createGroup =  () => {
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

    render(){
        const animatedComponents = makeAnimated();
        return(
            <div className="container-fluid">
                <h5 className="text-left">Новая группа</h5>
                <div className="row">
                    <div className="col-lg-12">
                        <Card>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Form labelCol={{span:7}}
                                        wrapperCol={{span:12}}
                                        layout="horizontal">
                                        <Form.Item label="Название группы">
                                            <Input id="nameGroup" placeholder="Введите название группы"/>
                                        </Form.Item>
                                        <Form.Item label="Участники">
                                            <Select
                                            onChange = {this.addWorkers}
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            mode="multiple"
                                            isMulti
                                            options={this.state.workers}
                                            placeholder="Выбрать"
                                            // style={{width:"50%"}}
                                            className="text-left"
                                            />
                                        </Form.Item>
                                        {/* <Form.Item>
                                            <Actions items = {this.state.actions}/>
                                        </Form.Item >  */}
                                        <Form.Item label="Описание"> 
                                            <TextArea
                                            // value={value}
                                            id={'description'}
                                            placeholder="Введите описание"
                                            autoSize={{ minRows: 3, maxRows: 5 }}
                                            />
                                        </Form.Item>
                                    </Form>
                                    <Actions onChangeCheckBox={this.onChangeCheckBox} items = {this.state.actions}/>
                                    <div className="col-md-12 text-right" style={{marginTop:"20px",marginLeft:"-150px"}}>
                                    <div className="error-add-group text-right">Введите все поля</div>
                                <br/>
                                    <Button onClick={this.createGroup} style={{backgroundColor:"#1890ff"}}>Отправить</Button>
                                    <Button onClick={()=>{document.location='view_groups'}} style={{backgroundColor:"#e6f7ff",marginLeft:"5px"}}>Назад</Button>
                                </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddGroups;