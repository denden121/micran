import React from 'react'
import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
// import 'react' from React

const NavAndHeader=(props)=> {
    return(
        <div>
            <div className="Head">
                <Header clickLogOut={props.logOut}/>
            </div>

            <div className='Nav'>
                <Navigation/>
            </div>
        </div>
    )
}
export default NavAndHeader