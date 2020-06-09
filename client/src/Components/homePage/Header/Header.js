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
                    
                 </div>

            </div>



        </div>

    )
}
export default Header