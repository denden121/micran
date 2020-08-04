import React, { Component } from 'react';
import './App.css';
import Auth from "./ Components/Auth/Auth"
import {BrowserRouter, Route} from 'react-router-dom'
import {Redirect,Switch} from 'react-router-dom'
import Main from "./ Components/ PersonCabinet/MainPage/Main"
import Registration from "./ Components/Registration/registration";
import ReactDOM from "react-dom";
import rend from "./index";

class  App extends Component {
    state = {
        token: '',
    }
    //обработка кнопки для авторизации
    authHandler = async () => {
        //написать валидацию и изменить окно неправильных данных
        //получение побличного ip для логирования
        const publicIp = require('public-ip');
        const ip = String(await publicIp.v4())
        //сбор данных для отправки на авторизацию
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        const login = document.getElementById("input-login").value
        const password = document.getElementById("input-password").value
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
        const sendUrl = "http://127.0.0.1:8000/token/"
        await fetch(sendUrl, requestOptions)
            .then(response => response.json())
            .then(result => localStorage.setItem('token', result.access))
            .catch(error => localStorage.setItem('token', ''));
        //проверка верны данные или нет
        if (localStorage.getItem('token') == '') {
            alert('incorrect')
        } else {
            //проверка прав
            myHeaders = new Headers();
            myHeaders.append("Authorization",localStorage.getItem('token'));
            requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            let url = "http://127.0.0.1:8000/check_admin/"
            await fetch(url, requestOptions)
                .then(response => response.text())
                .then(result => localStorage.setItem('admin',result))
                .catch(error => console.log('error'));
            //проверка зарегистрирован пользователь или нет
            url = "http://127.0.0.1:8000/check/"
            await fetch(url, requestOptions)
                .then(response => response.text())
                .then(result => localStorage.setItem('checkReg',result))
                .catch(error => console.log('error'));
            const time = new Date()
            localStorage.setItem('date',`${time.getMonth()+1} ${time.getFullYear()}`)
            rend()
        }
    }
    //функция отправки регистрации
    sendReg = async ()=> {
        //написать валидацию
        const token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        let formdata = new FormData();
        const first_name = document.getElementById('name').value
        const surname = document.getElementById('surname').value
        const middle_name = document.getElementById('fatherName').value
        formdata.append("first_name", first_name);
        formdata.append("last_name", surname);
        formdata.append("middle_name", middle_name);
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        const url = "http://127.0.0.1:8000/cabinet/register/"
        await fetch(url , requestOptions)
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
            const token = localStorage.getItem('token')
            const reg = localStorage.getItem('checkReg')
            if (typeof token=='string' &&
                token!=='' &&
                localStorage.getItem('checkReg') === 'True')
            {
                return <Redirect to='/cabinet'/>
            }
            else if( localStorage.getItem('checkReg')=='False'
                && typeof token=='string' && token!=='')
            {
                return <Redirect to='reg'/>
            }
            else{
                return <Auth authHandler={this.authHandler}/>;
            }
        };
        const funcReg = () =>{
            const reg = localStorage.getItem('checkReg')

            if (reg === 'False' ) {
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
                </Switch>
            </div>
        )
    }
}
export default App;