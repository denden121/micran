import React from 'react'
//import "./active.css"

const Active = props => (
    <div >

        <p align={"left"}>
         <strong>Название проекта:</strong> {props.name}
        </p>

        <p align={"left"}>
            <strong> Куратор:</strong> {props.curs}
        </p>

        <p align={"left"}>
              <strong>  Отработанные часы:</strong> {props.time}
        </p>

        <p align={"left"}>
            <strong>Текст отчета:</strong> {props.text}
        </p>
            <br/>

    </div>
)


export default Active