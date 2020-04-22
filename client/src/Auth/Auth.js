import {Component} from "react";
import './Auth.css'
import React from "react";
const Auth = (props) => {
    return(
        <div>
            <div>Авторизация</div>
            <input type="text" placeholder={'Введите логин'}/>
            <input type="password" placeholder={'Введите пароль'}/>
            <button onClick={props.authHandler}>Войти</button>
        </div>
    )
}

export default Auth;
