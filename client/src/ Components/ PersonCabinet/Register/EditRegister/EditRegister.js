import React from "react"
import {Form,Card,Checkbox,Radio,Select,Input,Space} from "antd"
import "./EditRegister.css"

const {TextArea} = Input;
const EditRegister =(props)=>{
    return(
        <div className="container-fluid">
            <h5 className="text-left">Редактирование проектов</h5>
            <br/>
            <div className="row">
                <div className="col-lg-12">
                    <Card>
                        <div className="form">
                            <div className="form-group row">
                                <label for="input-name" className="col-sm-2 col-form-label">Название проекта</label>
                                <div className="col-sm-9">
                                    <input  type="text" id={'input-name-group'} className="form-control form-control-sm"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="direction" className="col-sm-2 col-form-label">Направления</label>
                                <div className="col-sm-9">
                                <Select
                                    // defaultValue={props.personDate.fields.direction}
                                    placeholder="Выбрать"
                                    style={{width:"100%"}}
                                    className="text-left"
                                ></Select>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default EditRegister