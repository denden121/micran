import React from "react"
import "./Reports.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Reports =(props)=>{
    return(
        <div className="container-fluid" >
         
           <div className="Reports"> 
            <h4>Проект №1</h4>
            
            <div className="a">
                <label className="Label1">Куратор проекта: 
                <input type="text" className="form-control form-control-lg" placeholder="Введите ФИО куратора"/>
                </label>
            <div/>

            <div className="b">
                <label className="Label1">Затраченное время: 
                <input type="text" className="form-control form-control-lg" placeholder="Введите количество часов" /> 
                </label>
            </div>

            <div className="c">
                <label className="Label1">Отчет о проделанной работе:
                <textarea type="text"className="form-control form-control-lg" placeholder="Введите текст отчета"/> 
                </label>   
            </div>           
                </div>
                <button type="submit" className="btn btn-lg btn-primary">Отправить отчет</button>
            </div>
            
        </div>
    )
}

export default Reports;