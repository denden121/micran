import React from "react";
import './Auth.css';

const Auth= (props)=>{
    return(
        < div className="classes.Auth">
            <fieldset className="accountInfo">
                <label>Имя пользователя
                     <input onChange={props.changeLogin} type="text" id='userlogin' ></input>
                </label>
                <label>Пароль
                     <input onChange={props.changePassword} type="password" ></input>
                </label>
            </fieldset>
            <fieldset className="accountAction">
                <button onClick={props.authHandler}>Войти</button>
                    {/*<label>*/}
                    {/*    <input type="checkbox" name="remember"/> Запомнить*/}
                    {/*</label>*/}
            </fieldset>
        </div>
    )
}
export default Auth;