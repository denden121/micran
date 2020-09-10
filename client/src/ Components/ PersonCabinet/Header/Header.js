import React from "react"
import {NavLink} from "react-router-dom";
import {Button} from "antd"

const LogOut =(props)=>{
    return(
        // <div className="container-fluid">
        //      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        //         <a className="navbar-brand col-sm-2 col-md-2 mr-0" href="http://localhost:3000/cabinet/person">Микран</a>
        //         <ul className="navbar-nav px-3">
        //         <li className="nav-item text-nowrap">
        //             <a onClick={props.clickLogOut} className="nav-link" href="#">Выйти</a>
        //         </li>
        //         </ul>
        //     </nav>            
        // </div>
        // <div className="d-flex flex-column flex-md-row  p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        //     <nav className="my-2 my-md-0 mr-md-3">
        //         <div className="text-right">
        //             <a onClick={props.clickLogOut} type="primary" size="small"  href="#" style={{marginRight:"10px"}}>Выйти</a>
        //         </div>
        //     </nav>  
        // </div>
        <header className="blog-header py-3">
            <div className="text-right">
            <a onClick={props.clickLogOut} className="btn btn-sm btn-outline-secondary" size="small"  href="#" style={{marginRight:"10px"}}>Выйти</a>
            </div>
            <hr/>
        </header>
    )
}
export default LogOut;