import React from 'react'

export default props => (
    <div>
        <h3>Название проекта: {props.name}</h3>
        <h2>Кураторы проекта: {props.curator}</h2>
    </div>
)