import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../LookReport.css'

const ProjectCard =(props)=>{
    return(
        <div className="container-fluid" >
        <div className="Otchet">
           
            <div className="pageReport">
            <div className="card text-left" >
                <div className="card-body">
                    <h5 className="card-title">Отчет</h5>
                       <div className="card-text">
                       <h6>Название проекта</h6>
             <div className="projName">{props.project}</div>
        <h6>Куратор проекта</h6>
            <div className="supervisor">{props.curator}</div>
         <h6>Часы</h6>
            <div className="time">{props.hour}</div>
        <h6>Текст отчета</h6>
            <div className="repText">{props.text}</div>
                       </div>                        
                </div>
          </div>
         </div>               
        
        </div>
    </div>
    )
}

export default ProjectCard;

