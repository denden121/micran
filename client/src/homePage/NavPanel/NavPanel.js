import React from 'react'
import './NavPanel.css'
// import Logo from "../PersArea/micran.png";

const NavPanel =(props)=>{
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
export default NavPanel