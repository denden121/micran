import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header"
import SendReport from "../SendReport/SendReport"
import PersonData from "../PersonData/PersonData"

const Main =(props)=>{
    return(
        <div className="container">
            <Header/>
            {/*<Navigation/>*/}
            <PersonData/>
        </div>
    )
}

export default Main;