import React from 'react';
import './PersArea.css'
import NavPanel from '../NavPanel/NavPanel'
import Navigation from '../Navigation/Navigation'
import PersonData from '../PersonData/PersonData'


const PersArea =()=>{
    return(
        <div>

            <NavPanel name={"Личный кабинет"}/>
            <div>
                <Navigation/>
            </div>

            <div>
                <hr className="Header"/>
            </div>
            <div>
                <PersonData/>
            </div>
        </div>
    )
}

export default PersArea;