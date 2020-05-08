import React, { Component } from 'react';
import './App.css';
import Auth from './Auth/Auth'
import {Route} from 'react-router-dom'
import {Redirect,Switch} from 'react-router-dom'
import PersArea from "./homePage/PersArea";

class  App extends Component{
    state = {
        token:'',
        cabinet:{}
    }
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
        await fetch("http://127.0.0.1:8000/token/", requestOptions)
            .then(response => response.text())
            .then(result => this.setState({token: result.split(',')[1].split(':')[1].replace('"', '').replace('"', '').replace('}', '')}))
            .catch(() => this.setState({token:''}));
        // console.log(this.state.token)
        if(this.state.token ==='') {
            alert('incorect')
        }
        var myHeaders = new Headers();
        myHeaders.append("Authorization",this.state.token);

        var requestOptions1 = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/cabinet/2/", requestOptions1)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        console.log(this.state.cabinet)
    }
    render() {
        const temp = () =>{
            return < PersArea date = {this.state.cabinet} />;
        }
        const tempAuth =()=> {
            if (this.state.token !== '') {
                return <Redirect to = '/cabinet'/>
            }else {
                return <Auth authHandler = {this.authHandler} changeLogin = {this.changeLogin}
                             changePassword = {this.changePassword}/>;
            }
        };
        return (
           <div className = 'App' >
               <Switch>
                   <Route path='/' exact component = {tempAuth} />
                   <Route path='/cabinet' exact component={temp}/>
                   <Redirect to = '/temp'/>
               </Switch>
           </div >
        );
    }
}

export default App;