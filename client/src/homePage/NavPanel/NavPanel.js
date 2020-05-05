import React from 'react'
import './NavPanel.css'
// import Logo from "../PersArea/micran.png";

const NavPanel =()=>{
    return(
        <div>
            <div className="Logo">
                {/*<img src={Logo} alt="Logo"></img>*/}
            </div>
            <div className="Panel">
                <hr/>
                    Личный кабинет
                 <div className="Exit">
                     <button className={"Ex"}>Выйти</button>
                 </div>

            </div>



        </div>

    )
}
export default NavPanel