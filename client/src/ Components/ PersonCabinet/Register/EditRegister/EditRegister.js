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
                                    <input  type="text" id={'input-name-group'} className="form-control form-control-sm"
                                    placeholder="Введите текст"/>
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
                            <div className="form-group row">
                                <label for="description" className="col-sm-2 col-form-label">Описание</label>
                                <div className="col-sm-9">
                                    <textarea className="form-control textar"
                                    id={"description"}
                                    autoSize={{minRows: 2, maxRows: 8}}
                                    placeholder="Введите текст"/>
                                </div>                                
                            </div>
                            <hr/>
                            <div className="form-group row">
                                <label for="director" className="col-sm-2 col-form-label">Руководитель</label>
                                <div className="col-sm-9">
                                    <Select
                                    placeholder="Выбрать"
                                    style={{width:"100%"}}
                                    className="text-left"
                                    id={"director"}
                                    ></Select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="designer" className="col-sm-2 col-form-label">Главный конструктор</label>
                                <div className="col-sm-9">
                                    <Select
                                        placeholder="Выбрать"
                                        style={{width:"100%"}}
                                        className="text-left"
                                        id={"designer"}
                                    ></Select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="deputy" className="col-sm-2 col-form-label">Зам.Гл.Конструктора</label>
                                <div className="col-sm-9">
                                    <Select
                                        placeholder="Выбрать"
                                        style={{width:"100%"}}
                                        className="text-left"
                                        id={"deputy"}
                                    ></Select>
                                </div>
                            </div>
                            <hr/>
                            <div className="form-group row">
                                <label for="num_contract" className="col-sm-2 col-form-label">№ договора</label>
                                <div className="col-sm-9">
                                    <textarea
                                    id={"num-contract"}
                                    autoSize={{minRows: 2, maxRows: 8}}
                                    className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="customer" className="col-sm-2 col-form-label">Заказчик</label>
                                <div className="col-sm-9">
                                    <textarea
                                    id={"customer"}
                                    autoSize={{minRows: 2, maxRows: 8}}
                                    className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="order" className="col-sm-2 col-form-label">Заказ на производство</label>
                                <div className="col-sm-9">
                                    <textarea
                                    id={"order"}
                                    autoSize={{minRows: 2, maxRows: 8}}
                                    className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="comment" className="col-sm-2 col-form-label">Комментарий</label>
                                <div className="col-sm-9">
                                    <textarea
                                    id={"comment"}
                                    autoSize={{minRows: 2, maxRows: 8}}
                                    className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="tip" className="col-sm-2 col-form-label">Тип</label>
                                <div className="col-sm-9 text-left">
                                <Radio.Group id={"tip"}>
                                    <Radio  value={0}><label className="tip1" for="inlineCheckbox1">Внутр</label></Radio>
                                    <Radio value={1}><label className="tip2" for="inlineCheckbox1">Внеш</label></Radio>
                                </Radio.Group>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="state" className="col-sm-2 col-form-label">Состояние</label>
                                <div className="col-sm-9 text-left">
                                    <Radio.Group id={"state"}>
                                        <Radio  value={0}><label className="open" for="inlineCheckbox1">Открыт</label></Radio>
                                        <Radio value={1}><label className="cclose" for="inlineCheckbox1">Закрыт</label></Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="state" className="col-sm-2 col-form-label" >Доступность для отчетов сотрудников</label>
                                <div className="col-sm-9 text-left">
                                <Radio.Group>
                                    <Radio  value={0}><label className="open" for="inlineCheckbox1">Доступен</label></Radio>
                                    <Radio value={1}><label className="cclose" for="inlineCheckbox1">Недоступен</label></Radio>
                                </Radio.Group>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="pp" className="col-sm-2 col-form-label" >Приемка ВП</label>
                                <div className="col-sm-9 text-left">
                                <Checkbox id={"pp"}>
                                    <label className="pp" for="inlineCheckbox1">ПП</label>
                                </Checkbox>
                                </div>
                            </div>
                            <br/>
                            <div className="text-center">
                                <button className="btn btn-success btn-sm" style={{marginRight:"5px"}}>Сохранить</button>
                                <button className="btn btn-secondary btn-sm">Отмена</button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default EditRegister