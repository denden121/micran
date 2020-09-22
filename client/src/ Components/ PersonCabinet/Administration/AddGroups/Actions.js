import {Checkbox, Col, Form, Row} from "antd";
import React from "react";

const Fields =(props)=>{
    console.log(props)
    let temp = props.items ? props.items.map((item)=>{

        let checkBoxes = item.actions

        return <Form labelCol={{span:7}}
        wrapperCol={{span:12}}
        layout="horizontal">
        <Form.Item label={item.group_name}  name="checkbox-group">
            <div className="text-left" >
                {checkBoxes.map((box)=>{
                    return <div>
                        <Checkbox style={{ lineHeight: '32px' }} value={box.pk} onChange={props.onChangeCheckBox} >
                            {box.action} {box.code}
                        </Checkbox>
                    </div>
                })}
            </div>
        </Form.Item>
        </Form>
    }):''
    return temp
}

export default Fields