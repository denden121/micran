import React from "react"
import "./NewProject.css"
import Register from "../Register"
import {Select} from "antd";
import makeAnimated from "react-select/animated/dist/react-select.esm";

class NewProject extends React.Component{
    state={
        people:{},
        directors:{},
        directions:{},
        select_direction:'',
    }
    loadDate = async () =>{
        let myHeaders = new Headers();
        let token = localStorage.getItem('token')
        myHeaders.append("Authorization", token);
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        let directionValue;
        let directorValue;
        let peopleValue;
        await fetch("http://127.0.0.1:8000/directions/", requestOptions)
            .then(response => response.json())
            .then(result =>{
                directionValue = Array.from(result)
                directionValue = directionValue.map(direction => {
                    return {value:`${direction.pk}`,label:`${direction.direction}`}
                })
                console.log(directionValue)
            } )
            .catch(error => console.log('error', error));
        await fetch("http://127.0.0.1:8000/workers/project/managers/", requestOptions)
            .then(response => response.json())
            .then(result =>{
                directorValue = Array.from(result)
                directorValue = directorValue.map(director => {
                    return {value:`${director.pk}`,label:`${director.fields.last_name + ' ' + director.fields.first_name+' '+director.fields.middle_name}`}
                })
            } )
            .catch(error => console.log('error', error))
        await fetch("http://127.0.0.1:8000/workers/project/", requestOptions)
            .then(response => response.json())
            .then(result =>{
                peopleValue = Array.from(result)
                peopleValue = peopleValue.map(director => {
                    return {value:`${director.pk}`,label:`${director.fields.last_name + ' ' + director.fields.first_name+' '+director.fields.middle_name}`}
                })
            })
            .catch(error => console.log('error', error));
        this.setState({
            people: peopleValue,
            directions: directionValue,
            directors:directorValue
        })
    }
    onChangeSelectDirection=(event)=>{
        this.setState({select_direction:event})
        // console.log(this.state)
    }
    componentDidMount() {
        this.loadDate()
    }

    render() {
        const animatedComponents = makeAnimated();
        console.log(this.state)
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="text-left">Новый проект</h3>
                        <div
                            className="row no-gutters border rounded overflow-hidden flex-lg-row mb-4 shadow-sm h-lg-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <div className="block1">
                                    <div className="input-group mb-3 input-group-lg">
                                        <label className="napr col-sm-2 text-left"
                                               style={{fontSize: "16px"}}>Направления</label>
                                        <Select
                                            onChange = {this.onChangeSelectDirection}
                                            closeMenuOnSelect={true}
                                            components={animatedComponents}
                                            options={this.state.directions.length ? this.state.directions :''}
                                            placeholder="Выбрать"
                                        />
                                    </div>
                                    <br/>
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-2 text-left" style={{fontSize: "16px"}}>Новый
                                            проект</label>
                                        <textarea
                                            className="form-control"
                                            rows="2"
                                            placeholder="Новый проект">
                                    </textarea>
                                    </div>
                                    <hr className="normal"/>
                                </div>
                                <div className="block2">
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-2 text-left"
                                               style={{fontSize: "16px"}}>Руководитель</label>
                                        <Select
                                            onChange = {this.onChangeSelectDirection}
                                            closeMenuOnSelect={true}
                                            components={animatedComponents}
                                            options={this.state.directors.length ? this.state.directors :''}
                                            placeholder="Выбрать"
                                        />
                                    </div>
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-2 text-left" style={{fontSize: "16px"}}>Главный
                                            конструктор</label>
                                        <Select
                                            onChange = {this.onChangeSelectManager}
                                            closeMenuOnSelect={true}
                                            components={animatedComponents}
                                            options={this.state.directors.length ? this.state.directors :''}
                                            placeholder="Выбрать"
                                        />
                                    </div>
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-2 text-left" style={{fontSize: "16px"}}>Зам.главного
                                            конструктора</label>
                                        <Select
                                            onChange = {this.onChangeSelec}
                                            closeMenuOnSelect={true}
                                            components={animatedComponents}
                                            options={this.state.people.length ? this.state.people :''}
                                            placeholder="Выбрать"
                                            width = {'700pxgit '}
                                        />
                                    </div>
                                    <hr className="normal"/>
                                </div>
                                <div className="block3">
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-2 text-left" style={{fontSize: "16px"}}>№
                                            договора</label>
                                        <textarea
                                            className="form-control"
                                            rows="2"
                                            placeholder="№ договора">
                                </textarea>
                                    </div>
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-2 text-left"
                                               style={{fontSize: "16px"}}>Заказчик</label>
                                        <textarea
                                            className="form-control"
                                            rows="2"
                                            placeholder="Заказчик">
                                    </textarea>
                                    </div>
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-2 text-left" style={{fontSize: "16px"}}>Заказ на
                                            производство</label>
                                        <textarea
                                            className="form-control"
                                            rows="2"
                                            placeholder="Заказ на производство">
                                    </textarea>
                                    </div>
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-2 text-left" style={{fontSize: "16px"}}>Комментарий
                                            для сотрудников</label>
                                        <textarea
                                            className="form-control"
                                            rows="2"
                                            placeholder="Описание">
                                    </textarea>
                                    </div>
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-2 text-left"
                                               style={{fontSize: "16px"}}>Тип</label>
                                        <div className="checkbox checkbox-inline ">
                                            <input type="form-check-input text-success " type="radio" className="styled"
                                                   name="tip" value="vnutr"/>
                                            <label for="inlineCheckbox1" style={{
                                                border: "3px solid grey",
                                                background: "grey",
                                                color: "white",
                                                borderRadius: "7px",
                                                fontSize: "12px",
                                                marginLeft: "5px"
                                            }}> Внутр</label>
                                        </div>

                                        <div className="checkbox checkbox-inline ">
                                            <input type="form-check-input text-success " type="radio" className="styled"
                                                   name="tip" value="vnesh" style={{marginLeft: "5px"}}/>
                                            <label for="inlineCheckbox1" style={{
                                                border: "3px solid #FF7A36",
                                                background: "#FF7A36",
                                                color: "white",
                                                borderRadius: "7px",
                                                fontSize: "12px",
                                                marginLeft: "5px"
                                            }}>Внеш</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-2 text-left"
                                               style={{fontSize: "16px"}}>Состояние</label>
                                        <div className="checkbox checkbox-inline ">
                                            <input type="form-check-input text-success " type="radio" className="styled"
                                                   name="sost" value="open"/>
                                            <label for="inlineCheckbox1" style={{
                                                border: "3px solid #6FD76F",
                                                background: "#6FD76F",
                                                color: "white",
                                                borderRadius: "7px",
                                                fontSize: "12px",
                                                marginLeft: "5px"
                                            }}>Открыт</label>
                                        </div>
                                        <div className="checkbox checkbox-inline ">
                                            <input type="form-check-input text-success " type="radio" className="styled"
                                                   name="sost" value="close" style={{marginLeft: "5px"}}/>
                                            <label for="inlineCheckbox1" style={{
                                                border: "3px solid #E23C3C",
                                                background: "#E23C3C",
                                                color: "white",
                                                borderRadius: "7px",
                                                fontSize: "12px",
                                                marginLeft: "5px"
                                            }}>Закрыт</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-2 text-left" style={{fontSize: "16px"}}>Доступность
                                            для отчетов сотрудников</label>
                                        <div className="checkbox checkbox-inline ">
                                            <input type="form-check-input text-success " type="radio" className="styled"
                                                   name="dost" value="dostupen"/>
                                            <label for="inlineCheckbox1" style={{
                                                border: "3px solid #6FD76F",
                                                background: "#6FD76F",
                                                color: "white",
                                                borderRadius: "7px",
                                                fontSize: "12px",
                                                marginLeft: "5px"
                                            }}>Досупен</label>
                                        </div>
                                        <div className="checkbox checkbox-inline ">
                                            <input type="form-check-input text-success " type="radio" className="styled"
                                                   name="dost" value="nedostupen" style={{marginLeft: "5px"}}/>
                                            <label for="inlineCheckbox1" style={{
                                                border: "3px solid #E23C3C",
                                                background: "#E23C3C",
                                                color: "white",
                                                borderRadius: "7px",
                                                fontSize: "12px",
                                                marginLeft: "5px"
                                            }}>Недоступен</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-2 text-left" style={{fontSize: "16px"}}>Приемка
                                            ВП</label>
                                        <div className="checkbox checkbox-inline ">
                                            <input type="form-check-input text-success " type="radio"
                                                   className="styled"/>
                                            <label for="inlineCheckbox1" style={{
                                                border: "3px solid #454545",
                                                background: "#454545",
                                                color: "white",
                                                borderRadius: "7px",
                                                fontSize: "12px",
                                                marginLeft: "5px"
                                            }}>ПП</label>
                                        </div>
                                    </div>
                                    <hr className="normal"/>
                                </div>
                                <div className="block4 text-right">
                                    {/* <button type="button" className="btn btn-primary btn-sm" onClick={()=>document.location='/cabinet/admin/register'}>Назад</button> */}
                                    <button type="button" className="btn btn-success btn-sm"
                                            style={{marginLeft: "5px"}}>Сохранить
                                    </button>
                                    <button type="button" className="btn btn-secondary btn-sm"
                                            style={{marginLeft: "5px"}}
                                            onClick={() => document.location = '/cabinet/admin/register'}>Отмена
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewProject