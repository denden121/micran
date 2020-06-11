import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './registration.css'

const Registration =(props)=>{
    return(
       <div className="container-fluid">
           <form className="form-horizontal">
               <h5>Регистрация</h5>

               <div className="from-group row">
                   <label className="col-sm-2 col-form-label">Имя</label>
                   <div className="col-sm-10">
                       <input type="text" className="form-control"/>
                   </div>
               </div>

               <div className="from-group row">
                   <label className="col-sm-2 col-form-label">Фамилия</label>
                   <div className="col-sm-10">
                       <input type="text" className="form-control"/>
                   </div>
               </div>

               <div className="from-group row">
                   <label className="col-sm-2 col-form-label">Отчество</label>
                   <div className="col-sm-10">
                       <input type="text" className="form-control"/>
                   </div>
               </div>

               
            <button type="submit" class="btn btn-primary">Зарегистрироваться</button>

           </form>
       </div>
    )
        
}

export default Registration;