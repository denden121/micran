import React from 'react';
import Logo from './micran.png';
import './PersArea.css'
import NavPanel from '../NavPanel/NavPanel'
import Navigation from '../Navigation/Navigation'
import PersonData from '../PersonData/PersonData'


const PersArea =()=>{
    return(
        <div>
            <div className="Logo">
                <img src={Logo} alt='Logo'></img>
            </div>

            <div>
                <NavPanel/>
                <hr className="Panel"/>
            </div>
            <div>
                <Navigation/>
            </div>

            <div>
                <hr className="Header"/>
                <label>
                    Личный кабинет
                </label>
                <button>
                    выйти
                </button>
            </div>
            <div>
                <PersonData/>
            </div>
        </div>
    )
}

export default PersArea;