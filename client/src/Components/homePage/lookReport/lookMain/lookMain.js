import React, {Component} from 'react'
import Active from "./activeReport/active";
import "./lookMain.css"

class  LookMain extends Component {
    state = {
        projects: [

            {name: 'Проект №1', curs:"Василий Ильченко", time:20, text:"Проект готов"},
            {name: 'Проект №2', curs:"Всеволод Макаров",time:30, text:"Проект готов"}

        ]
    }
    render(){

        return(

            <div className="container">
                <div className="card">
                {this.state.projects.map((project, index) =>{
                    return(

                        <Active

                            key={index}
                            name={project.name}
                            curs={project.curs}
                            time={project.time}
                            text={project.text}
                        />

                    )
                })}
                </div>
            </div>
        )
    }

}
export default LookMain