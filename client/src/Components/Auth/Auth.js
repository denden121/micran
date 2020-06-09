import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Auth= ()=>{
    return(
        < div className="container-fluid">
        <form className="form-signin">
            <div className="form-froup">
            <label >Имя пользователя</label>
                 <input type="text" className="form-control form-control-lg" id = 'input-login' />
            </div>
            
            <div className="form-froup">
            <label >Пароль</label>
                 <input type="password" className="form-control form-control-lg" id = 'input-password'/>
            </div>
            
            
            <button type="submit" className="btn btn-large btn-primary" >Sign in</button>
       {/* </form>*/}
       {/*<form className="accountAction">*/}
       
          
                {/*<label>*/}
                {/*    <input type="checkbox" name="remember"/> Запомнить*/}
                {/*</label>*/}
        </form>
       
        </div>
     
    )
}
export default Auth;