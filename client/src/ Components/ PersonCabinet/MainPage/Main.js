import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header"
import SendReport from "../SendReport/SendReport"

const Main =(props)=>{
    return(
        <div className="container">
            <Header/>
            <Navigation/>
            <SendReport/>
        </div>
    )
}

export default Main;