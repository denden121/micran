import React, {Component} from 'react'
import Active from "./activeReport/active";

class  LookMain extends Component {
    state = {
        projects: [
            {
                reps:[
                    {text: 'Проект №1'},
                    {text: 'Проект №2'}
                ]
            }
        ]
    }
    render(){
        return(
            <div>
                <Active
                    reps={this.state.projects[0].reps}
                />
            </div>
        )
    }
}
export default LookMain