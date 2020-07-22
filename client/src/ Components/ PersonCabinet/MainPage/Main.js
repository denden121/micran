import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header"
import SendReport from "../SendReport/SendReport"
// import rend from '../../../index.js'
import PersonData from "../PersonData/PersonData";
import "./Main.css"
import Switch from "react-bootstrap/cjs/Switch";
import {Redirect, Route} from "react-router-dom";
import AddGroups from "../Administration/AddGroups/AddGroups";
import ManageGroupps from "../Administration/ManageGroups/ManageGroupps";
import ViewLogs from "../Administration/ViewLogs/ViewLogs";
import Salary from "../Salary/Salary"
import rend from "../../../index";
import Payroll from "../Payroll/Payroll"
import Register from "../Register/Register"
import NewProject from "../Register/NewProject/NewProject";
import UnitProjects from "../Register/UnitProjects/UnitProjects"

const Month = {
    'Янв':1,
    'Фев':2,
    'Март':3,
    'Апр':4,
    'Май':5,
    'Июнь':6,
    'Июль':7,
    'Авг':8,
    'Сен':9,
    'Окт':10,
    'Ноя':11,
    'Дек':12,
}

class Main extends Component{

    logOut = () =>{
        localStorage.setItem('token','')
        localStorage.setItem('checkReg','False')
    }
    onClickDate = (event) =>{
        let month = event.target.textContent
        month  = Month[month]
        const temp_date=  localStorage.getItem('date').split(' ')[1]
        console.log(temp_date)
        localStorage.setItem('date',`${month} ${temp_date}`)
        rend()
    }
    onClickNext=()=>{
        const temp_month = localStorage.getItem('date').split(' ')[0]
        const temp_year = localStorage.getItem('date').split(' ')[1]
        localStorage.setItem('date',`${temp_month} ${parseInt(temp_year)+1}`)
        rend()
    }
    onClickPrivious=()=>{
        console.log('clicckk')
        const temp_month = localStorage.getItem('date').split(' ')[0]
        const temp_year = localStorage.getItem('date').split(' ')[1]
        localStorage.setItem('date',`${temp_month} ${parseInt(temp_year)-1}`)
        rend()
    }

    render() {
        if(!localStorage.getItem('date')){
            let date = new Date()
            localStorage.setItem('date',`${date.getMonth()+1} ${date.getFullYear()} `)
        }
        return (
            <div className="container">
                <div className="Head">
                    <Header clickLogOut={this.logOut}/>
                </div>

                <div className='Nav'>
                    <Navigation
                        onClickDate = {this.onClickDate}
                        onClickNext = {this.onClickNext}
                        onClickPrivious = {this.onClickPrivious}
                    />
                </div>

                <div className="Data">
                    <Switch>
                        <Route path='/cabinet/' exact component = {PersonData}/>
                        <Route path='/cabinet/send_reports' exact  component = {SendReport}/>
                        <Route path='/cabinet/salary' exact  component = {Salary}/>
                        <Route path='/cabinet/admin/add_groups' exact component = {AddGroups}/>
                        <Route path='/cabinet/admin/logs' exact component = {ViewLogs}/>
                        <Route path='/cabinet/admin/view_groups' exact component = {ManageGroupps}/>
                        <Route path='/cabinet/admin/play_roll' exact  component = {Payroll}/>
                        <Route path='/cabinet/admin/register' exact  component = {Register}/>  
                        <Route path='/cabinet/admin/new_project' exact  component = {NewProject}/>
                        <Route path='/cabinet/admin/unit_projects' exact  component = {UnitProjects}/>                         
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Main;