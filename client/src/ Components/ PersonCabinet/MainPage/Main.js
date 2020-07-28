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
    '1':'Янв',
    '2':'Фев',
    '3':'Март',
    '4':'Апр',
    '5':'Май',
    '6':'Июнь',
    '7':'Июль',
    '8':'Авг',
    '9':'Сен',
    '10':'Окт',
    '11':'Ноя',
    '12':'Дек',
}

class Main extends Component{

    logOut = () =>{
        localStorage.setItem('token','')
        localStorage.setItem('checkReg','False')
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
                        <Route path='/cabinet/' exact component = {SendReport}/>
                        <Route path='/cabinet/person' exact  component = {PersonData}/>
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