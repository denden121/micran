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
                <input id='mentorProject' type="text" className="form-control form-control-lg" placeholder="Введите ФИО куратора"/>
                </label>
            <div/>

            <div className="b">
                <label className="Label1">Затраченное время: 
                <input id = 'spendTime' type="text" className="form-control form-control-lg" placeholder="Введите количество часов" />
                </label>
            </div>

            <div className="c">
                <label className="Label1">Отчет о проделанной работе:
                <textarea id='bodeReport' type="text"className="form-control form-control-lg" placeholder="Введите текст отчета"/>
                </label>   
            </div>           
                </div>
                <button onClick={props.send_report} type="submit" className="btn btn-lg btn-primary">Отправить отчет</button>
            </div>
            
        </div>
    )
}

export default Reports;