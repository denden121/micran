import React from 'react';
import './PersArea.css'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import PersonData from '../PersonData/PersonData'
//import Report from '../Report/report'


const PersArea =(props)=>{
    return(
        <div>
            <Header name={"Личный кабинет"}/>
            <div>
                <Navigation/>
            </div>
            
            <div>
                <hr className="Header"/>
            </div>
            <div className="container">
                <PersonData data = {props.date} />
            </div>

        </div>
    )
}

export default PersArea;