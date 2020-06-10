import React from 'react'

const ProjItem = props =>{
    return(
        <option>
            {props.name.text}
        </option>
    )
}

export default ProjItem