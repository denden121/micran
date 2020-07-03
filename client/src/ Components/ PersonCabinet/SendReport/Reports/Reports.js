import React from "react"
import "./Reports.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Reports =(props)=>{
    return(
        <div className="container-fluid" >
            <div className="row" style={{display:"none"}}>
                <div className="col-sm-8">
                    <div className="col-sm-12">
                        <div className="box">
                            <div className="box-content">
                                <div className="row">
                                    <div className="col-sm-12 has-tooltip" data-placement="top" title="Пользуйтесь поиском при выборе проекта">
                                        <p id="proj"><strong>Проект</strong></p>
                                        <select className="select2 form-control select2-offscreen"
                                        id='CB_proj'>                                            
                                        </select>
                                        <p id="proj_note"></p>
                                    </div>
                                </div>
                                    <br/>
                                <div id="time-read">
                                    <strong>Часы:</strong>
                                    <input className="form-control" placeholder="Часы"  type="text"/>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>

                </div>

            </div> 
                    
            
        </div>
    )
}

export default Reports;