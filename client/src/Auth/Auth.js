import React from "react";
import './Auth.css';

const Auth= (props)=>{
    return(

        < div className="classesAuth">
            <fieldset className="accountInfo">
                <label>Имя пользователя
                     <input type="text" id = 'input-login' />
                </label>
                <label>Пароль
                     <input id = 'input-password' type="password" />
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