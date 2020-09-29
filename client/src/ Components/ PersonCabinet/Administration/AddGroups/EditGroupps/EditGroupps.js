import React from "react"
import { Card,Input,Checkbox,Row,Col } from 'antd';
import {
    Form,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Modal
  } from 'antd';

import "./EditGroupps.css"
const Fields =(props)=>{
    console.log(props)
    let temp = props.items ? props.items.map((item)=>{
        let checkBoxes = item.actions
        return <div className="form-group row">
            <label className="col-sm-2" name="checkbox-group">{item.name}</label>  
                <div className="col-sm-10" >
                    {checkBoxes.map((box)=>{
                        return <div className="col-sm-2 text-left" style={{paddingLeft:"0px"}}>
                            <Checkbox  value={box.pk} defaultChecked={box.checked} onChange={props.onChangeCheckBox} >
                               {box.name}, {box.code}
                            </Checkbox>
                        </div>
                    })}
                </div>
            </div>
        
    }):''
    return temp
}
const { TextArea } = Input;
class  EditGroups extends React.Component{
    state={
        group:{},
        changed_date:{}
    }
    handleOk = () => {
        const nameGroup = document.querySelector('#input-name').value
        document.querySelector('#input-name').value = ''
        const description = document.querySelector('#description').value
        document.querySelector('#description').value = ''
        const token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        let formdata = new FormData();
        formdata.append("name", nameGroup);
        formdata.append("actions", JSON.stringify(this.state.changed_date));
        formdata.append("description",description);
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        const pk = localStorage.getItem('selectGroup')
        fetch(`http://127.0.0.1:8000/groups/${pk}/change/`, requestOptions)
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                document.location='/cabinet/admin/view_groups'
            })
            .catch(error => console.log('error', error));
    };
    onChangeCheckBox=(e)=>{
        let temp = {...this.state.changed_date}
        temp[e.target.value]  = e.target.checked
        if (e.target.defaultChecked === e.target.checked){
            delete temp[e.target.value]
        }
        console.log(temp)
        console.log(JSON.stringify(temp))
        this.setState({changed_date:temp})
    }
    loadSelectGroup=()=>{
        const token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        const pk = localStorage.getItem('selectGroup')
        fetch(`http://127.0.0.1:8000/groups/${pk}/`, requestOptions)
            .then(response =>  response.json())
            .then(result => {
                console.log('date',result)
                this.setState({group: result})})
            .catch(error => console.log('error', error))

    }
    componentDidMount() {
        this.loadSelectGroup()
    }
    render() {
        return (
            <div className="container-fluid">
                <h5 className="text-left">Редактирование групп</h5>
                <div className="row">                    
                    <div className="col-lg-12">
                    <Card>
                    <div className="form">
                    <div className="form-group row">
                        <label for="input-name" className="col-sm-2 col-form-label">Название</label>
                        <div className="col-sm-9">
                            <input defaultValue={this.state.group.name} type="text" id={'input-name'} className="form-control form-control-sm"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="description" className="col-sm-2 col-form-label">Описание</label>
                        <div class="col-sm-9">
                            <textarea className="form-control" 
                            defaultValue={this.state.group.description}
                            id={"description"}
                            autoSize={{minRows: 1, maxRows: 8}} Default>

                            </textarea>
                        </div>
                    </div>
                    <Fields
                        onChangeCheckBox={this.onChangeCheckBox}
                        items={this.state.group.groups_actions}/>
                </div>
                <div className="text-right" style={{marginRight:"70px"}}>
                    <button onClick={this.handleOk} className="btn btn-info btn-sm">Сохранить</button>
                </div>
                
                </Card>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default EditGroups;