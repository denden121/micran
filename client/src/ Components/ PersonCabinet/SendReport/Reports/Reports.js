import React from "react"
import "./Reports.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Reports =(props)=>{
    return(
        <div className="container-fluid" >
            
            {/* <strong><h3>Отчет о проделанной работе</h3></strong> */}
           <div className="Reports"> 
                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Проекты
                    </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                     <a className="dropdown-item" href="#" >Проект №1</a>
                     <a className="dropdown-item" href="#">Проект №2</a>
                     <a className="dropdown-item" href="#">Проект №3</a>
                </div>
                </div>
           </div>
            
            
            
        </div>
    )
}

export default Reports;