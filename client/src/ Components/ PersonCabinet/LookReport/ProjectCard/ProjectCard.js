import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsCard from "./  ProjectsCard/ProjectsCard"

class SendReport extends Component{

    state = {
        projects: [
            {number: 1, time: 5},
            {number: 2, time: 10},
            {number: 3, time: 20}
        ]
    }   

    render() {
        const projects = this.state.projects
    return(
    <div className container-fluid>
        <strong><h2>Отчет о проделанной работе</h2></strong>
        
        <ProjectsCard number={projects[0].number} time={projects[0].time} />
        <ProjectsCard number={projects[1].number} time={projects[1].time}/>
        <ProjectsCard number={projects[2].number} time={projects[2].time}/>
    </div>
    )
}
}

export default SendReport