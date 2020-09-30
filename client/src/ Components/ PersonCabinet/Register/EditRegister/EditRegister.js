import React from "react"
import {Card,Checkbox,Radio,Select} from "antd"
import "./EditRegister.css"


class EditRegister extends React.Component{
    componentDidMount() {
        this.loadProject()
        this.loadDirections()
    }
    state = {
        project:{},
        people:[],
        directions:[],
        directors:[]
    }
    loadDirections = async () =>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        let directionValue;
        let directorValue;
        let peopleValue;
        const pk = localStorage.getItem('selectProject')
        await fetch("http://127.0.0.1:8000/directions/", requestOptions)
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                directionValue = Array.from(result)
                directionValue = directionValue.map(direction => {
                    return {value:`${direction.pk}`,label:`${direction.fields.code} ${direction.fields.name}`}
                })
                console.log('llll',directionValue)
            } )
            .catch(error => console.log('error', error));
        await fetch("http://127.0.0.1:8000/workers/project/managers/", requestOptions)
            .then(response => response.json())
            .then(result =>{
                directorValue = Array.from(result)
                directorValue = directorValue.map(director => {
                    return {value:`${director.pk}`,label:`${director.fields.last_name + ' ' + director.fields.first_name+' '+director.fields.middle_name}`}
                })
                console.log('rrr',directorValue)
            } )
            .catch(error => console.log('error', error))
        await fetch("http://127.0.0.1:8000/workers/project/", requestOptions)
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                peopleValue = Array.from(result)
                peopleValue = peopleValue.map(director => {
                    return {value:`${director.pk}`,label:`${director.fields.last_name + ' ' + director.fields.first_name+' '+director.fields.middle_name}`}
                })
                console.log('ggg',peopleValue)
            })
            .catch(error => console.log('error', error));
        this.setState({
            people: peopleValue,
            directions: directionValue,
            directors:directorValue
        })
        console.log('state',this.state)
    }
    loadProject = async () =>{
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
    onChangeType=(e)=>{
        console.log(e.target.name)
        let name = e.target.name
        let temp_project = this.state.project
        if(name ==='type'){
            temp_project.type = e.target.value === 1 ? true : false
        }else if(name ==='status'){
            temp_project.status = e.target.value === 1 ? true : false
        }else{
            temp_project.report_availability = e.target.value === 1 ? true : false
        }
        console.log(temp_project)
        this.setState({project:temp_project})

    }
    onClickBack= () =>{
        document.location='/cabinet/admin/register'
        localStorage.setItem('selectProject','')
    }
    onChangeText=(e)=>{
        const name = e.target.name
        if(name ==='name'){

        }else if(name ===''){

        }
    }
    render(){
        console.log(this.state.project.direction)
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
                                        <input
                                            onChange={this.onChangeText}
                                            name = {'name'}
                                            type="text" id={'input-name-group'}
                                            className="form-control form-control-sm"
                                            defaultValue={this.state.project.name}
                                            placeholder="Введите текст"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="direction" className="col-sm-2 col-form-label">Направления</label>
                                    <div className="col-sm-9">
                                        <Select
                                            onChange={this.onChangeText}
                                            options={this.state.directions}
                                            value={this.state.project.direction}
                                            // placeholder="Выбрать"
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
                                            options={this.state.directors}
                                            value={this.state.project.manager}
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
                                            options={this.state.directors}
                                            value = {this.state.project.chief_designer}
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
                                            options={this.state.directors}
                                            value = {this.state.project.deputy_chief_designer}
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
                                        defaultValue={this.state.project.contract}
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
                                        defaultValue={this.state.project.client}
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
                                        defaultValue={this.state.project.production_order}
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
                                        defaultValue={this.state.project.comment_for_employees}
                                        id={"comment"}
                                        autoSize={{minRows: 2, maxRows: 8}}
                                        className="form-control"
                                    />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="tip" className="col-sm-2 col-form-label">Тип</label>
                                    <div className="col-sm-9 text-left">
                                        <Radio.Group name = {'type'} onChange={this.onChangeType} value={this.state.project.type ?1:0} id={"tip"}>
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
                                        <Radio.Group onChange={this.onChangeType} name = {'status'} value={this.state.project.status ?1:0} id={"state"}>
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
                                        <Radio.Group onChange={this.onChangeType} name = {'report_availability'} value={this.state.project.report_availability ? 1 : 0}>
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
                                        <Checkbox id={"pp"} defaultChecked={true}>
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