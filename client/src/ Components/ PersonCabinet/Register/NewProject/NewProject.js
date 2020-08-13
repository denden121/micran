import React from "react"
import "./NewProject.css"
import Register from "../Register"
import {Select} from "antd";
import makeAnimated from "react-select/animated/dist/react-select.esm";
import { Radio,Input,Button } from 'antd';
import { Checkbox } from 'antd';


const { TextArea } = Input;
class NewProject extends React.Component{
    state={
        people:{},
        directors:{},
        directions:{},
        select_direction:'',
        select_director:'',
        select_designer:'',
        select_deputy_designer:'',
        type:'',
        state_project:'',
        availability:'',
        vp:''
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
    onChangeSelectDirector=(event)=>{
        this.setState({select_director:event})
        // console.log(this.state)
    }
    onChangeSelectDesigner=(event)=>{
        this.setState({select_designer:event})
        // console.log(this.state)
    }
    onChangeSelectDeputyDesigner=(event)=>{

        this.setState({select_deputy_designer:event})
        // console.log(this.state)
    }
    onChangeType=(e)=>{
        this.setState({type:e.target.value})
    }

    onChangeState=(e)=>{
        this.setState({state_project:e.target.value})
    }

    onChangeAvailability=(e)=>{
        this.setState({availability:e.target.value})

    }
    onChangeVp=(e)=>{
        this.setState({vp:e.target.checked})
    }
    onClickCreateGroup=async ()=>{
        const direction = this.state.select_direction
        const director = this.state.select_director
        const disigner = this.state.select_designer
        const deputyDesigner = this.state.select_deputy_designer
        const state = this.state.state_project
        const type = this.state.type
        const availability = this.state.availability
        const vp = this.state.vp
        const nameProject = document.querySelector('#name-project-new-project').value
        const number = document.querySelector('#number-contract-new-project').value
        const order = document.querySelector('#order-new-project').value
        const productionOrder = document.querySelector('#production-order-new-project').value
        const comment = document.querySelector('#comment-to-co-workers-new-project').value
        console.log(direction,director,disigner,deputyDesigner,state,type,availability,vp,nameProject,number,order,productionOrder,comment)
        let token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization",token );
        var formdata = new FormData();
        formdata.append("name", nameProject);
        formdata.append("direction", direction);
        formdata.append("manager", director);
        formdata.append("client", order);
        formdata.append("chief_designer", disigner);
        formdata.append("deputy_chief_designer", deputyDesigner);
        formdata.append("production_order", productionOrder);
        formdata.append("commet_for_employees", comment);
        formdata.append("contract", number);
        formdata.append("type", type);
        formdata.append("status", state);
        formdata.append("report_availability", availability);
        formdata.append("acceptance_vp", vp);
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        await fetch("http://127.0.0.1:8000/cabinet/projects/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        document.location = '/cabinet/admin/register'
    }
    componentDidMount() {
        this.loadDate()
    }

    render() {
        const animatedComponents = makeAnimated();
        // console.log(this.state)
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
                                        <label className="napr col-sm-4 text-right"
                                               style={{fontSize: "16px"}}>Направления</label>
                                        <Select
                                            onChange = {this.onChangeSelectDirection}
                                            closeMenuOnSelect={true}
                                            components={animatedComponents}
                                            options={this.state.directions.length ? this.state.directions :''}
                                            placeholder="Выбрать"
                                            style={{width:"50%"}}
                                        />
                                    </div>
                                    <br/>
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-4 text-right" style={{fontSize: "16px"}}>Новый
                                            проект</label>
                                        <TextArea
                                            // value={value}
                                            id={'name-project-new-project'}
                                            onChange={this.onChange}
                                            placeholder="Введите описание"
                                            autoSize={{ minRows: 3, maxRows: 5 }}
                                            style={{width:"50%"}}
                                        />
                                    </div>
                                    <hr className="normal"/>
                                </div>
                                <div className="block2">
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-4 text-right"
                                               style={{fontSize: "16px"}}>Руководитель</label>
                                        <Select
                                            onChange = {this.onChangeSelectDirector}
                                            closeMenuOnSelect={true}
                                            components={animatedComponents}
                                            options={this.state.directors.length ? this.state.directors :''}
                                            placeholder="Выбрать"
                                            style={{width:"50%"}}
                                        />
                                    </div>
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-4 text-right" style={{fontSize: "16px"}}>Главный
                                            конструктор</label>
                                        <Select
                                            onChange = {this.onChangeSelectDesigner}
                                            closeMenuOnSelect={true}
                                            components={animatedComponents}
                                            options={this.state.directors.length ? this.state.directors :''}
                                            placeholder="Выбрать"
                                            style={{width:"50%"}}
                                        />
                                    </div>
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-4 text-right" style={{fontSize: "16px"}}>Зам.главного
                                            конструктора</label>
                                        <Select
                                            onChange = {this.onChangeSelectDeputyDesigner}
                                            closeMenuOnSelect={true}
                                            components={animatedComponents}
                                            options={this.state.people.length ? this.state.people :''}
                                            placeholder="Выбрать"
                                            style={{width:"50%"}}
                                        />
                                    </div>
                                    <hr className="normal"/>
                                </div>
                                <div className="block3">
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-4 text-right" style={{fontSize: "16px"}}>№
                                            договора</label>
                                            <TextArea
                                            // value={value}
                                            id={'number-contract-new-project'}
                                            onChange={this.onChange}
                                            placeholder="Введите описание"
                                            autoSize={{ minRows: 3, maxRows: 5 }}
                                            style={{width:"50%"}}
                                            />
                                    </div>
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-4 text-right"
                                               style={{fontSize: "16px"}}>Заказчик</label>
                                            <TextArea
                                            // value={value}
                                            id={'order-new-project'}
                                            onChange={this.onChange}
                                            placeholder="Введите описание"
                                            autoSize={{ minRows: 3, maxRows: 5 }}
                                            style={{width:"50%"}}
                                            />
                                    </div>
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-4 text-right" style={{fontSize: "16px"}}>Заказ на
                                            производство</label>
                                            <TextArea
                                            // value={value}
                                            id={'production-order-new-project'}
                                            onChange={this.onChange}
                                            placeholder="Введите описание"
                                            autoSize={{ minRows: 3, maxRows: 5 }}
                                            style={{width:"50%"}}
                                            />
                                    </div>
                                    <div className="input-group mb-3 input-group-sm">
                                        <label className="napr col-sm-4 text-right" style={{fontSize: "16px"}}>Комментарий
                                            для сотрудников</label>
                                            <TextArea
                                            // value={value}
                                            id={'comment-to-co-workers-new-project'}
                                            onChange={this.onChange}
                                            placeholder="Введите описание"
                                            autoSize={{ minRows: 3, maxRows: 5 }}
                                            style={{width:"50%"}}
                                            />
                                    </div>
                                    <div>
                                        <div className="input-group mb-3 input-group-sm">
                                            <label className="napr col-sm-4 text-right"
                                                   style={{fontSize: "16px"}}>Тип</label>
                                            <div className="checkbox checkbox-inline ">
                                                <Radio.Group  onChange={this.onChangeType}>
                                                    <Radio value={0}><label for="inlineCheckbox1" style={{
                                                        border: "3px solid grey",
                                                        background: "grey",
                                                        color: "white",
                                                        borderRadius: "7px",
                                                        fontSize: "12px",
                                                        marginLeft: "5px"
                                                    }}> Внутр</label></Radio>
                                                    <Radio value={1}><label for="inlineCheckbox1" style={{
                                                        border: "3px solid #FF7A36",
                                                        background: "#FF7A36",
                                                        color: "white",
                                                        borderRadius: "7px",
                                                        fontSize: "12px",
                                                        marginLeft: "5px"
                                                    }}>Внеш</label></Radio>
                                                </Radio.Group>

                                            </div>
                                        </div>
                                        <div className="input-group mb-3 input-group-sm">
                                            <label className="napr col-sm-4 text-right"
                                                   style={{fontSize: "16px"}}>Состояние</label>
                                            <div className="checkbox checkbox-inline ">
                                                <Radio.Group onChange={this.onChangeState}>
                                                    <Radio value={0}><label for="inlineCheckbox1" style={{
                                                        border: "3px solid #6FD76F",
                                                        background: "#6FD76F",
                                                        color: "white",
                                                        borderRadius: "7px",
                                                        fontSize: "12px",
                                                        marginLeft: "5px"
                                                    }}>Открыт</label></Radio>
                                                    <Radio value={1}><label for="inlineCheckbox1" style={{
                                                        border: "3px solid #E23C3C",
                                                        background: "#E23C3C",
                                                        color: "white",
                                                        borderRadius: "7px",
                                                        fontSize: "12px",
                                                        marginLeft: "5px"
                                                    }}>Закрыт</label></Radio>
                                                </Radio.Group>
                                            </div>
                                        </div>
                                        <div className="input-group mb-3 input-group-sm">
                                            <label className="napr col-sm-4 text-right" style={{fontSize: "16px"}}>Доступность
                                                для отчетов сотрудников</label>
                                            <div className="checkbox checkbox-inline ">
                                                <Radio.Group onChange={this.onChangeAvailability}>
                                                    <Radio value={0}><label for="inlineCheckbox1" style={{
                                                        border: "3px solid #6FD76F",
                                                        background: "#6FD76F",
                                                        color: "white",
                                                        borderRadius: "7px",
                                                        fontSize: "12px",
                                                        marginLeft: "5px"
                                                    }}>Досупен</label></Radio>
                                                    <Radio value={1}><label for="inlineCheckbox1" style={{
                                                        border: "3px solid #E23C3C",
                                                        background: "#E23C3C",
                                                        color: "white",
                                                        borderRadius: "7px",
                                                        fontSize: "12px",
                                                        marginLeft: "5px"
                                                    }}>Недоступен</label></Radio>
                                                </Radio.Group>
                                            </div>
                                        </div>
                                        <div className="input-group mb-3 input-group-sm">
                                            <label className="napr col-sm-4 text-right" style={{fontSize: "16px"}}>Приемка
                                                ВП</label>
                                            <div className="checkbox checkbox-inline ">
                                                <Checkbox onChange={this.onChangeVp}>
                                                    <label for="inlineCheckbox1" style={{
                                                    border: "3px solid #454545",
                                                    background: "#454545",
                                                    color: "white",
                                                    borderRadius: "7px",
                                                    fontSize: "12px",
                                                    marginLeft: "5px"
                                                    }}>ПП</label>
                                                </Checkbox>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="normal"/>
                                </div>
                                <div className="block4 text-right">
                                    {/* <button type="button" className="btn btn-primary btn-sm" onClick={()=>document.location='/cabinet/admin/register'}>Назад</button> */}
                                    <Button onClick={this.onClickCreateGroup} type="button" 
                                            style={{marginLeft: "5px",backgroundColor:"#096dd9"}}>Сохранить
                                    </Button>
                                    <Button type="button" className="btn btn-secondary btn-sm"
                                            style={{marginLeft: "5px"}}
                                            onClick={() => document.location = '/cabinet/admin/register'}>Отмена
                                    </Button>
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