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
                        return <div>
                            <Checkbox  value={box.pk} defaultChecked={box.checked} onChange={props.onChangeCheckBox} >
                                {box.name} {box.code}
                            </Checkbox>
                        </div>
                    })}
                </div>
            </div>
        
    }):''
    return temp
}
const { TextArea } = Input;
const  EditGroups = (props) => {
    return (
        <div className="container-fluid">
            <div className="form">
                <div class="form-group row">
                    <label for="input-name" className="col-sm-2 col-form-label">Название</label>
                    <div class="col-sm-10">
                    <input type="text" readonly className="form-control-plaintext" defaultValue={props.date.name} id={"input-name"}/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="description" class="col-sm-2 col-form-label">Описание</label>
                    <div class="col-sm-10">
                    <div><a href=""><div>1</div></a></div>
                    <TextArea
                        id={"description"}
                        defaultValue={props.date.description}
                        autoSize={{minRows: 1, maxRows: 8}}
                                        >
                    </TextArea>
                </div>
                </div>
                <Fields
                    onChangeCheckBox = {props.onChangeCheckBox}
                    items = {props.date.groups_actions}/>            
            </div>                    
        </div>           
    )
}

export default EditGroups;