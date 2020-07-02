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
                    <h4 className="card-title"><strong>Отчет</strong></h4>
                       <div className="card-text">

             <div className="projName">
                 <h6><strong>Название проекта</strong></h6>
                 {props.project}
             </div>
            <div className="supervisor">
                <h6><strong>Куратор проекта</strong></h6>
                {props.curator}
            </div>

            <div className="time">
                <h6><strong>Часы</strong></h6>
                {props.hour}
            </div>

            <div className="repText">
                <h6><strong>Текст отчета</strong></h6>
                {props.text}
            </div>
                       </div>                        
                </div>
          </div>
         </div>               
        
        </div>
    </div>
    )
}

export default ProjectCard;

