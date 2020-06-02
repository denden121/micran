import React from 'react'
import './activeProj.css'
import ProjList from "./projList/projList";

const ActiveProj = props =>(

    <div className="projName">
        <ProjList
            names={props.names}
        />
    </div>
)

export default ActiveProj