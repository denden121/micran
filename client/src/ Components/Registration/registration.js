import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './registration.css'

const Registration =(props)=>{
    return(
        <div className="container-fluid">
            <body className="authhh" style={{paddingTop:"60px",paddingBottom:"60px"}}>
            <form className="form-horizontal">
                <h5>Регистрация</h5>
                <div className="from-group row">
                    <label className="col-sm-2 col-form-label">Имя</label>
                    <div className="col-sm-10">
                        <input id ='name' type="text" className="form-control"/>
                    </div>
                </div>

                <div className="from-group row">
                    <label className="col-sm-2 col-form-label">Фамилия</label>
                    <div className="col-sm-10">
                        <input id='surname' type="text" className="form-control"/>
                    </div>
                </div>

                <div className="from-group row">
                    <label className="col-sm-2 col-form-label">Отчество</label>
                    <div className="col-sm-10">
                        <input id="fatherName" type="text" className="form-control"/>
                    </div>
                </div>


                <button onClick={props.sendFunc} type="submit" class="btn btn-primary">Зарегистрироваться</button>

            </form>
            </body>
            
        </div>
    )

}

export default Registration;