import React from 'react'
//import ViewReports from "../ viewReports/viewReports";

const Active = props => (
    <div>
        <h3>Project name: {props.name}</h3>
        <p>Curator: {props.curs}</p>
        <p>Отработанные часы: {props.time}</p>
    </div>
)


export default Active