import React, { Component } from 'react';
import './App.css';
import Auth from './Auth/Auth'
// import PersArea from "./homePage/PersArea";
//
// import axios from 'axios'


class  App extends Component{
    state = {
        login:'',
        password:'',
        valigForm:false,
        token:'',
        cabinet:{}
    }
    authHandler = () =>{
        let formdata = new FormData();
        formdata.append("username", this.state.login);
        formdata.append("password",this.state.password);
        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        fetch("http://127.0.0.1:8000/token/", requestOptions)
            .then(response => response.text())
            .then(result => this.setState({token: result.split(',')[1].split(':')[1].replace('"', '').replace('"', '').replace('}', '')}))
            .catch(() => this.setState({token:''}));
        // console.log(this.state.token)
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
           <div className = 'App' >
               <Auth authHandler = {this.authHandler} changeLogin = {this.changeLogin} changePassword = {this.changePassword}/>
           </div >
             // <div className={App}>
             //     <PersArea/>
             // </div>
        );
    }
}

export default App;