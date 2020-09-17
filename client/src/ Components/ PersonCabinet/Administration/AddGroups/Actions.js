import {Checkbox, Col, Form, Row} from "antd";
import React from "react";

const Fields =(props)=>{
    console.log(props)
    let temp = props.items ? props.items.map((item)=>{
        // console.log(item)
        // return ""
        let checkBoxes = item.actions
        return <Form.Item label={item.group_name} style={{marginTop:"-20px"}}>
            <div className="text-left">
                <Checkbox.Group>
                    <Row>
                        <Col>
                            {checkBoxes.map((box)=>{
                                return <Checkbox value={box.pk} onChange={props.onChangeCheckbox}>
                                    {box.action} {box.code}
                                </Checkbox>
                            })}

                        </Col>
                    </Row>
                </Checkbox.Group>
            </div>
        </Form.Item>
    }):''
    return temp
}

export default Fields