import React from "react"
import "./LookReport.css"

const ProjectsCard =(props)=>{
    return(
        <div className="container-fluid" >
            <div className="Otchet">
                <div className="head">
                    <Header/>
                </div>
                <div className="pageNav">
                    <Navigation/>
                </div>
                <div className="pageReport">
                <div className="card text-left" >
                    <div className="card-body">
                        <h5 className="card-title">Отчет</h5>
                           <div className="card-text">
                               <h6>Название проекта</h6>
                               <div className="projName"></div>
                               <h6>Куратор проекта</h6>
                               <div className="supervisor"></div>
                               <h6>Часы</h6>
                               <div className="time"></div>
                               <h6>Текст отчета</h6>
                               <div className="repText"></div>
                           </div>                        
                    </div>
              </div>
             </div>               
            
            </div>
        </div>
    )
}

export default ProjectsCard;