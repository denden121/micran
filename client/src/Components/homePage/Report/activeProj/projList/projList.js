import React from 'react'
import ProjItem from "../porjItem/projItem";

const ProjList = props => (
   <select>
    {props.names.map((name, index)=>{
        return(
            <ProjItem
                name={name}
            />
        )
        })}
   </select>
)
export default ProjList