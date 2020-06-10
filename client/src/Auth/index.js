import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Auth = (props) =>{
    return(
        <div class="container">
            <form className="form-signin">
                <h1 className="form-signin-heading">Имя пользователя</h1>
                <input type="text" class="input-block-level" placeholder="Логин"></input>
                <h1 className="form-signin-heading">Пароль</h1>
                <input type="password" class="input-block-level" placeholder="Password"></input>                
                <label class="checkbox">
          <input type="checkbox" value="remember-me">Запомнить меня></input>
              </label>
        <button className="btn btn-large btn-primary" type="submit">Sign in</button>
            </form>
        </div>
    )
}
