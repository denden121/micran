import React from "react"

const ProjectsCard =(props)=>{
    return(
        <div className="container-fluid" >
         
           <div className="Projects"> 
            <h4>Проект №:{props.number}</h4>
            <p>Затраченное время: {props.time} часов</p>
            </div>
        </div>
    )
}

export default ProjectsCard;