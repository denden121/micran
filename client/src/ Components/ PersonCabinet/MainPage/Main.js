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
import Employees from "../Employees/Employees"
import Interval from "../WorkCalendar/Interval/Interval"



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
                        <Route path='/cabinet/admin/employees' exact  component = {Employees}/>  
                        <Route path='/cabinet/admin/calendar' exact  component = {Interval}/> 
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Main;