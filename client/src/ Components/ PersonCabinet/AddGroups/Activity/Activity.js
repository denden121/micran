import React from 'react'
import '../AddGroups.css'
const Activity =    (props) =>{
    let temp = Array.from(props.actions)
    return(
        temp.map((action,index) =>{
            console.log(action)
            let tempId = 'activity_' +action.pk
            return(
                <div className="checkBox">
                    <input className="form-check-input activity" type="checkbox" id={tempId} />
                    <label className="form-check-label" >
                        {action.fields.action}
                    </label>
                </div>
            )
        })
    )
}

export default Activity