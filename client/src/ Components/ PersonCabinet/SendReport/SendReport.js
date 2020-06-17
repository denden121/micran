import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Reports from "./Reports/Reports"

class SendReport extends Component{

   

    render() {
        
    return(
    <div className container-fluid>
        <strong><h2>Отчет о проделанной работе</h2></strong>
        
        <Reports/>
        
        
    </div>
    )
}
}

export default SendReport