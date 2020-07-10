import React, { Component } from 'react';
import './App.css';
import Auth from "./ Components/Auth/Auth"
import {BrowserRouter, Route} from 'react-router-dom'
import {Redirect,Switch} from 'react-router-dom'
import Main from "./ Components/ PersonCabinet/MainPage/Main"
import Registration from "./ Components/Registration/registration";
import ReactDOM from "react-dom";

class  App extends Component {
    state = {
        token: '',
    }
    //обработка кнопки для авторизации
    authHandler = async () => {
        const publicIp = require('public-ip');
        const ip = String(await publicIp.v4())
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        // myHeaders.append("IP",this.state.ip)
        let login = document.getElementById("input-login").value
        let password = document.getElementById("input-password").value
        console.log(login,password)
        let urlencoded = new URLSearchParams();// Добавляем параметры запросы
        urlencoded.append("username", login);
        urlencoded.append("password", password);
        urlencoded.append("IP", ip);
        let requestOptions = {
            method: 'POST',
            body: urlencoded,
            redirect: 'follow',
            headers: myHeaders
        };
        console.log(login,password)
        //проверка логина и пароля(отправка запроса)
        let sendUrl = "http://127.0.0.1:8000/token/"
        await fetch(sendUrl, requestOptions)
            .then(response => response.json())
            .then(result => localStorage.setItem('token', result.access))
            .catch(error => localStorage.setItem('token', ''));

        console.log('sssss',localStorage.getItem('token'))
        console.log(localStorage.getItem('token'))
        if (localStorage.getItem('token') == 'undefined') {
            alert('incorrect')
        } else {
            myHeaders = new Headers();
            myHeaders.append("Authorization",localStorage.getItem('token'));

            requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            await fetch("http://127.0.0.1:8000/check/", requestOptions)
                .then(response => response.text())
                .then(result => localStorage.setItem('checkReg',result))
                .catch(error => console.log('error'));
            ReactDOM.render(
                <BrowserRouter>
                    <React.StrictMode>
                        <App/>
                    </React.StrictMode>
                </BrowserRouter>,
                document.getElementById('root')
            );
        }
        // console.log('прошел всю кнопку')

    }
    sendReg = async ()=> {
        let myHeaders = new Headers();
        let token = localStorage.getItem('token')
        myHeaders.append("Authorization", token);

        let formdata = new FormData();
        let first_name = document.getElementById('name').value
        let surname = document.getElementById('surname').value
        let middle_name = document.getElementById('fatherName').value
        formdata.append("first_name", first_name);
        formdata.append("second_name", surname);
        formdata.append("middle_name", middle_name);
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        await fetch("http://127.0.0.1:8000/cabinet/register/", requestOptions)
            .then(response => response.text())
            .catch(error => console.log('error'));
        localStorage.setItem('checkReg', 'True')
    }
    render(){
        const funcPersArea = () => {
            let token = localStorage.getItem('token')
            if (typeof token==='string' && token!=='') {
                return <Main/>
            } else {
                return <Redirect to='/'/>
            }
        }
        const funcAuth = () => {
            let token = localStorage.getItem('token')
            let reg = localStorage.getItem('checkReg')
            // console.log(token,reg)
            console.log(typeof token=='string' && token!=='' && localStorage.getItem('checkReg') === 'True')
            console.log(localStorage.getItem('checkReg')=='False' &&typeof token=='string' && token!=='')
            if (typeof token=='string' && token!=='' && localStorage.getItem('checkReg') === 'True') {
                return <Redirect to='/cabinet'/>
            }
            else if( localStorage.getItem('checkReg')=='False' &&typeof token=='string' && token!=='') {
                return <Redirect to='reg'/>
            }
            else{
                console.log('пошел на авторизацию')
                return <Auth authHandler={this.authHandler}/>;
            }
        };
        const funcReg = () =>{
            let reg = localStorage.getItem('checkReg')
            // debugger;
            if(reg === 'False' ) {
                return <Registration sendFunc={this.sendReg}/>
            }
            else{
                return <Redirect to='/cabinet'/>;
            }
        }
        return (
            <div className='App'>
                <Switch>
                    <Route path='/' exact component = {funcAuth}/>
                    <Route path='/reg' exact component = {funcReg}/>
                    <Route path='/cabinet'  component = {funcPersArea}/>
                    {/*<Redirect to='/cabinet'/>*/}
                </Switch>
            </div>
        )
    }
}
export default App;