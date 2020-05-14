import React, { Component } from 'react';
import './App.css';
import Auth from './Auth/Auth'
import {Route} from 'react-router-dom'
import {Redirect,Switch} from 'react-router-dom'
import PersArea from "./homePage/PersArea";
import Report from "./homePage/Report/Report";
import LookMain from "./homePage/lookReport/lookMain/lookMain";

class  App extends Component{
    state = {
        token:'',
        cabinet:{}
    }
    //обработка кнопки для авторизации
    authHandler = async () =>{
        let login = document.getElementById("input-login").value
        let password = document.getElementById("input-password").value
        let formdata = new FormData();
        formdata.append("username", login);
        formdata.append("password", password);
        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        //проверка логина и пароля
        await fetch("http://127.0.0.1:8000/token/", requestOptions)
            .then(response => response.json())
            .then(result =>console.log(this.setState({token:result.access})))
            .catch(error => this.setState({token:''}));
        if(this.state.token ===undefined) {
            alert('incorrect')
        }
        let myHeaders = new Headers();
        myHeaders.append("Authorization",this.state.token);
        let requestOptions1 = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };
        //запрос на получение данных для личного кабинета
        fetch("http://127.0.0.1:8000/cabinet/1/", requestOptions1)
            .then(response =>response.json())
            .then(result => this.setState({cabinet:result[0].fields}))
            .catch(error => console.log('error', error));
    }
    sendReport=()=>{
        const hours = document.getElementById("count_hours").value
        const report = document.getElementById("report_text").value
        const nameProject = document.getElementById("name_project_text").value
        const curator = document.getElementById("curator_name").value
        let myHeaders = new Headers();
        myHeaders.append("Authorization", this.state.token);
        // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        let urlencoded = new URLSearchParams();
        urlencoded.append("project", nameProject);
        urlencoded.append("text", report);
        urlencoded.append("curator",curator );
        urlencoded.append("hour", hours);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/cabinet/reports/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    render() {
         const funcPersArea = () =>{
            return < PersArea date = {this.state.cabinet} />;
        }
        const funcAuth =()=> {
            if (this.state.token !== '') {
                return <Redirect to = '/cabinet'/>
            }else {
                return <Auth authHandler = {this.authHandler} changeLogin = {this.changeLogin}
                             changePassword = {this.changePassword}/>;
            }
        };
        const funcReport= () =>{
            return <Report sendReport = {this.sendReport}/>
        }
        return (
           <div className = 'App' >
               <Switch>
                   <Route path='/' exact component = {funcAuth} />
                   <Route path='/cabinet' exact component={funcPersArea}/>
                   <Route path ='/cabinet/report' exact component={funcReport}/>
                   <Route path='/cabinet/look' exact component={LookMain}/>
                   <Redirect to = '/temp'/>
               </Switch>
           </div >
        );
    }
}

export default App;