import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Reports from "./Reports/Reports"

const SendReport=(props)=>{
    return(
    <div className container-fluid>
        <strong><h2>Отчет о проделанной работе</h2></strong>
        <Reports send_report={props.send_report}/>
    </div>
    )
}

export default SendReport