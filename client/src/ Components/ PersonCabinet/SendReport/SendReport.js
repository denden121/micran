import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Reports from "./Reports/Reports"

const SendReport=(props)=>{
    return(
        //<div className container-fluid>
            
            <Reports send_report={props.send_report}/>
        //</div>
    )
}

export default SendReport