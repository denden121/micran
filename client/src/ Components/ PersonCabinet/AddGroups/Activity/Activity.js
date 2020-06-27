import React from 'react'
import '../AddGroups.css'
const Activity = (props) =>{
    let temp = Array.from(props.actions)
    return(
        temp.map((action,index) =>{
            console.log(action)
            return(
                <div className="checkBox">
                    <input className="form-check-input" type="checkbox"/>
                    <label className="form-check-label" >
                        {action.fields.action}
                    </label>
                </div>
            )
        })
    )
}

export default Activity