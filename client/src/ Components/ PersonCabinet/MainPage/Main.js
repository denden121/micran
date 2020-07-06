import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header"
import SendReport from "../SendReport/SendReport"
import rend from '../../../index.js'
import PersonData from "../PersonData/PersonData";
import "./Main.css"
import Switch from "react-bootstrap/cjs/Switch";
import {Redirect, Route} from "react-router-dom";
import AddGroups from "../AddGroups/AddGroups";
import ManageGroupps from "../ManageGroupps/ManageGroupps";

import Projects from "../Projects/Projects"
import ProjectCard from "../LookReport/ProjectCard/ProjectCard";
class Main extends Component{
    logOut = () =>{
        localStorage.setItem('token','')
        localStorage.setItem('checkReg','False')
        // rend()
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
                    <SendReport />
                    {/* <AddGroups/> */}
                    {/* <ManageGroupps/> */}
                    {/* <ProjectCard/> */}
                </div>
            </div>
        )
    }
}

export default Main;