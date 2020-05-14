import React, {Component} from 'react'
import Active from "./activeReport/active";

class  LookMain extends Component {
    state = {
        projects: [

            {name: 'Проект №1', curs:"Василий", time:20},
            {name: 'Проект №2', curs:"Всеволод",time:30}

        ]
    }
    render(){
        return(
            <div>
                {this.state.projects.map((project, index) =>{
                    return(
                        <Active
                            key={index}
                            name={project.name}
                            curs={project.curs}
                            time={project.time}
                        />
                    )
                })}
            </div>
        )
    }

}
export default LookMain