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

class Main extends Component{
    logOut = () =>{
        localStorage.setItem('token','')
        localStorage.setItem('checkReg','False')
    }
    render() {
        return (
            <div className="container">
                <div className="Head">
                    <Header clickLogOut={this.logOut}/>
                </div>

                <div className='Nav'>
                    <Navigation/>
                </div>

                <div className="Data">
                     {/* <Switch>
                        <Route path='/cabinet/' exact component = {PersonData}/>
                        <Route path='/cabinet/admin/add_groups' exact component = {AddGroups}/>
                        <Route path='/cabinet/admin/logs' exact component = {ViewLogs}/>
                        <Route path='/cabinet/admin/view_groups' exact component = {ManageGroupps}/>
                        <Route path='/cabinet/send_reports' exact  component = {SendReport}/> */}
                        {/*<Redirect to='/cabinet'/>*/}
                     {/* </Switch>  */}
                    <Salary/>
                </div>
            </div>
        )
    }
}

export default Main;