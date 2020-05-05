import React, { Component } from 'react';
import './App.css';
//import Auth from './Auth/Auth'
import PersArea from "./homePage/PersArea";

import axios from 'axios'


class App extends Component{
    state = {
        login:'',
        password:'',
        cabinet:{}
    }
    authHandler = ()=>{
        console.log(this.state.login)
        console.log(this.state.password)
        let formdata = new FormData();
        formdata.append("username", this.state.login);
        formdata.append("password",this.state.password);
        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        axios("http://127.0.0.1:8000/token/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
    }
    changeLogin = (event) =>{//считываем логин
        this.setState({
            login:event.target.value
        })
        // console.log(this.state.login)
        // console.log(event.target.value)
    }
    changePassword = (event) =>{//считываем пароль
        this.setState({
            password:event.target.value
        })
        // console.log(this.state.password)
    }

    render() {
        return ( 
           // <div className = "App" >
             //  <Auth authHandler = {this.authHandler} changeLogin = {this.changeLogin} changePassword = {this.changePassword}/>
            //</div >
             <div className={App}>
                 <PersArea/>
             </div>
        );
    }
}

export default App;