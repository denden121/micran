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


const Fields =(props)=>{
    console.log(props)
    let temp = props.items ? props.items.map((item)=>{
        let checkBoxes = item.actions
        return <Form labelCol={{span:7}}
                     wrapperCol={{span:12}}
                     layout="horizontal">
            <Form.Item label={item.name}  name="checkbox-group">
                <div className="text-left" >
                    {checkBoxes.map((box)=>{
                        return <div>
                            <Checkbox style={{ lineHeight: '32px' }} value={box.pk} defaultChecked={box.checked} onChange={props.onChangeCheckBox} >
                                {box.name} {box.code}
                            </Checkbox>
                        </div>
                    })}
                </div>
            </Form.Item>
        </Form>
    }):''
    return temp
}
const { TextArea } = Input;
const  EditGroups = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className=" col-lg-12">
                    <Card>
                        <div className="row">
                            <div className="col-lg-12">
                                <Form
                                    labelCol={{span: 7}}
                                    wrapperCol={{span: 12}}
                                    layout="horizontal"
                                >
                                    <Form.Item label="Название">
                                        <input className="form-control form-control-sm">ffff</input>
                                    </Form.Item>
                                    <Form.Item label="Описание" style={{marginTop: "-20px"}}>
                                        <textarea
                                            id={"description"}
                                            defaultValue={props.date.description}
                                            // autoSize={{minRows: 2, maxRows: 8}}
                                        />
                                    </Form.Item>
                                    <hr/>
                                    <br/>
                                    <Fields
                                        onChangeCheckBox = {props.onChangeCheckBox}
                                        items = {props.date.groups_actions}/>
                                </Form>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default EditGroups;