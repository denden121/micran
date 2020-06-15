import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header"

const Main =(props)=>{
    return(
        <div className="container">
            <Header/>
            <Navigation/>
        </div>
    )
}

export default Main;