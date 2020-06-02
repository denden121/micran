import React from 'react'
import './Header.css'
// import Logo from "../PersArea/micran.png";

const Header =(props)=>{
    return(
        <div>
            <div className="Logo">
                {/*<img src={Logo} alt="Logo"></img>*/}
            </div>
            <div className="Panel">

                {props.name}
                 <div className="Exit">
                     <button className={"Ex"}>Выйти</button>
                 </div>

            </div>



        </div>

    )
}
export default Header