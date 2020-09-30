import React from "react"
import {Card,Checkbox,Radio,Select} from "antd"
import "./EditRegister.css"


class EditRegister extends React.Component{
    componentDidMount() {
        this.loadProject()
    }
    state = {
        project:{}
    }
    loadProject = () =>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        const pk =localStorage.getItem('selectProject')
        fetch(`http://127.0.0.1:8000/cabinet/project/${pk}/`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.setState({project:result})
            })
            .catch(error => console.log(error))
        console.log('state',this.state)
    }
    onClickBack= () =>{
        document.location='/cabinet/admin/register'
        localStorage.setItem('selectProject','')
    }
    render(){
        console.log(this.state)
        return(
            <div className="container-fluid">
                <h5 className="text-left">Редактирование проектов</h5>
                <br/>
                <div className="row">
                    <div className="col-lg-12">
                        <Card>
                            <div className="form">
                                <div className="form-group row">
                                    <label htmlFor="input-name" className="col-sm-2 col-form-label">Название
                                        проекта</label>
                                    <div className="col-sm-9">
                                        <input type="text" id={'input-name-group'}
                                               className="form-control form-control-sm"
                                               defaultValue={this.state.project.name}
                                               placeholder="Введите текст"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="direction" className="col-sm-2 col-form-label">Направления</label>
                                    <div className="col-sm-9">
                                        <Select
                                            value={this.state.project.direction}
                                            placeholder="Выбрать"
                                            style={{width: "100%"}}
                                            className="text-left"
                                        />
                                    </div>
                                </div>
                                {/*<div className="form-group row">*/}
                                {/*    <label htmlFor="description" className="col-sm-2 col-form-label">Описание</label>*/}
                                {/*    <div className="col-sm-9">*/}
                                {/*    <textarea className="form-control textar"*/}
                                {/*              id={"description"}*/}
                                {/*              autoSize={{minRows: 2, maxRows: 8}}*/}
                                {/*              placeholder="Введите текст"/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <hr/>
                                <div className="form-group row">
                                    <label htmlFor="director" className="col-sm-2 col-form-label">Руководитель</label>
                                    <div className="col-sm-9">
                                        <Select
                                            // value={}
                                            placeholder="Выбрать"
                                            style={{width: "100%"}}
                                            className="text-left"
                                            id={"director"}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="designer" className="col-sm-2 col-form-label">Главный
                                        конструктор</label>
                                    <div className="col-sm-9">
                                        <Select
                                            placeholder="Выбрать"
                                            style={{width: "100%"}}
                                            className="text-left"
                                            id={"designer"}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="deputy"
                                           className="col-sm-2 col-form-label">Зам.Гл.Конструктора</label>
                                    <div className="col-sm-9">
                                        <Select
                                            placeholder="Выбрать"
                                            style={{width: "100%"}}
                                            className="text-left"
                                            id={"deputy"}
                                        />
                                    </div>
                                </div>
                                <hr/>
                                <div className="form-group row">
                                    <label htmlFor="num_contract" className="col-sm-2 col-form-label">№ договора</label>
                                    <div className="col-sm-9">
                                    <textarea
                                        id={"num-contract"}
                                        autoSize={{minRows: 2, maxRows: 8}}
                                        className="form-control"
                                    />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="customer" className="col-sm-2 col-form-label">Заказчик</label>
                                    <div className="col-sm-9">
                                    <textarea
                                        id={"customer"}
                                        autoSize={{minRows: 2, maxRows: 8}}
                                        className="form-control"
                                    />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="order" className="col-sm-2 col-form-label">Заказ на
                                        производство</label>
                                    <div className="col-sm-9">
                                    <textarea
                                        id={"order"}
                                        autoSize={{minRows: 2, maxRows: 8}}
                                        className="form-control"
                                    />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="comment" className="col-sm-2 col-form-label">Комментарий</label>
                                    <div className="col-sm-9">
                                    <textarea
                                        id={"comment"}
                                        autoSize={{minRows: 2, maxRows: 8}}
                                        className="form-control"
                                    />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="tip" className="col-sm-2 col-form-label">Тип</label>
                                    <div className="col-sm-9 text-left">
                                        <Radio.Group id={"tip"}>
                                            <Radio value={0}><label className="tip1"
                                                                    htmlFor="inlineCheckbox1">Внутр</label></Radio>
                                            <Radio value={1}><label className="tip2"
                                                                    htmlFor="inlineCheckbox1">Внеш</label></Radio>
                                        </Radio.Group>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="state" className="col-sm-2 col-form-label">Состояние</label>
                                    <div className="col-sm-9 text-left">
                                        <Radio.Group id={"state"}>
                                            <Radio value={0}><label className="open"
                                                                    htmlFor="inlineCheckbox1">Открыт</label></Radio>
                                            <Radio value={1}><label className="cclose"
                                                                    htmlFor="inlineCheckbox1">Закрыт</label></Radio>
                                        </Radio.Group>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="state" className="col-sm-2 col-form-label">Доступность для отчетов
                                        сотрудников</label>
                                    <div className="col-sm-9 text-left">
                                        <Radio.Group>
                                            <Radio value={0}><label className="open"
                                                                    htmlFor="inlineCheckbox1">Доступен</label></Radio>
                                            <Radio value={1}><label className="cclose"
                                                                    htmlFor="inlineCheckbox1">Недоступен</label></Radio>
                                        </Radio.Group>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="pp" className="col-sm-2 col-form-label">Приемка ВП</label>
                                    <div className="col-sm-9 text-left">
                                        <Checkbox id={"pp"}>
                                            <label className="pp" htmlFor="inlineCheckbox1">ПП</label>
                                        </Checkbox>
                                    </div>
                                </div>
                                <br/>
                                <div className="text-center">
                                    <button className="btn btn-success btn-sm" style={{marginRight: "5px"}}>Сохранить
                                    </button>
                                    <button className="btn btn-secondary btn-sm">Отмена</button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditRegister