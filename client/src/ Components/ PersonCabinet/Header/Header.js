import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

const Header =(props)=>{
    return(
        <div className="container-fluid">
             <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-2 col-md-2 mr-0" href="#">Микран</a>
                <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <a onClick={props.clickLogOut} className="nav-link" href="#">Выйти</a>
                </li>
                </ul>
            </nav>            
        </div>
    )
}
export default Header;