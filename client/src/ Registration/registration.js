import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './registration.css'

const Registration =(props)=>{
    return(
        <div className="container-fluid">
            <form className="form-registration">
                <h3>Регистрация</h3>
                    <div className="form-froup">
                         <label className="Label">
                             Имя
                             <input type="text" className="form-control form-control-lg"/>
                    </label>
                    </div>

                    <div className="form-froup">
                         <label className="Label">
                             Фамилия
                             <input type="text" className="form-control form-control-lg"/>
                    </label>
                    </div>

                    <div className="form-froup">
                         <label className="Label">
                             Отчество
                             <input type="text" className="form-control form-control-lg"/>
                    </label>
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary">Зарегистрироваться</button>  
            </form>
        </div>
    )
}

export default Registration;