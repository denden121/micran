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
  } from 'antd';

const { TextArea } = Input;
class  EditGroups extends React.Component{
    state = {
        date:[]
    }
    loadDates=()=>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        let idGroup = 8
        fetch(`http://127.0.0.1:8000/groups/${idGroup}/`, requestOptions)
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                this.setState({date:result})
            })
    }
    componentDidMount() {
        this.loadDates()
    }

    render() {

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
                                            <input className="form-control form-control-sm"></input>
                                        </Form.Item>
                                        <Form.Item label="Описание" style={{marginTop: "-20px"}}>
                                            <TextArea
                                                autoSize={{minRows: 2, maxRows: 8}}
                                            />
                                        </Form.Item>
                                        <hr/>
                                        <br/>
                                        <Form.Item label="1.Пользовательский раздел">
                                            <div className="text-left">
                                                {/*<Checkbox.Group onChange={props.onChangeCheckbox} options={user}/>*/}
                                            </div>
                                        </Form.Item>
                                        <hr/>
                                        <br/>
                                        <Form.Item label="2.Администраторский раздел" style={{marginTop: "-20px"}}>
                                            <div className="text-left">
                                                <Checkbox.Group>
                                                    <Row>
                                                        <Col>
                                                            {/*<Checkbox.Group onChange={props.onChangeCheckbox}/>*/}
                                                            {/*<Checkbox.Group onChange={props.onChangeCheckbox}/>*/}
                                                        </Col>
                                                    </Row>
                                                </Checkbox.Group>
                                            </div>
                                        </Form.Item>
                                    </Form>

                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditGroups;