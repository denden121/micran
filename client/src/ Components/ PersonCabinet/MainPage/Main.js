import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header"
import BrowseReports from '../BrowseReports/BrowseReports'
import SendReport from "../SendReport/SendReport"
import rend from '../../../index.js'
import PersonData from "../PersonData/PersonData";
import "./Main.css"
import Switch from "react-bootstrap/cjs/Switch";
import {Redirect, Route} from "react-router-dom";
import AddGroups from "../AddGroups/AddGroups";
class Main extends Component{
    
    logOut = () =>{
        localStorage.setItem('token','')
        localStorage.setItem('checkReg','False')
        // rend()
    }
    send_report =async ()=>{
        let mentor = document.getElementById('mentorProject').value
        let time = document.getElementById('spendTime').value
        let body = document.getElementById('bodeReport').value
        let token = localStorage.getItem('token')

        let myHeaders = new Headers()
        myHeaders.append("Authorization", token);

        let formdata = new FormData();
        formdata.append("text", body);
        formdata.append("hour ", time);
        formdata.append("project", "test");
        formdata.append("curator", mentor);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

         await fetch("http://127.0.0.1:8000/cabinet/reports/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
         alert('Отчет отправлен')
         document.getElementById('mentorProject').value = ''
         document.getElementById('spendTime').value= ''
         document.getElementById('bodeReport').value= ''
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
                    <BrowseReports/>
                    {/*<Switch>*/}
                    {/*<Route path='/cabinet/profile'>*/}
                    {/*    <SendReport send_report={this.send_report}/>*/}
                    {/*</Route>*/}
                    {/*    <Route path='/cabinet/send_report' exact component = {()=>{return <SendReport send_report={this.send_report}/>}}/>*/}
                    {/*    <Redirect to='/cabinet'/>*/}
                    {/*</Switch>*/}
                    {/*<SendReport send_report={this.send_report}/>*/}
                </div>
            </div>
        )
    }
}

export default Main;