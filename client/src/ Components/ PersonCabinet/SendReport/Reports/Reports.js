import React from "react"
import "./Reports.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../Card/Card"

const Reports =(props)=>{
    return(
       <div>
           <Card/>
       </div>
        // <div className="container-fluid">
        //     <div className="report">
        //     <div className="row" >
        //         <div className="col-sm-8">
        //             <div className="col-sm-12">
        //                 <div className="box">
        //                     <div className="box-content">
        //                         <div id="time-read">
        //                             <label className="col-sm-1" className="Label1"><strong>Проект:</strong></label>
        //                             {/* <input onChange={props.changeHours} className="form-control" placeholder="Часы" defaultValue = {String(props.report.hour)}  type="text"/> */}
        //                             <select className="select2 form-control select2-offscreen"
        //                                 id='CB_proj'>                                            
        //                                 </select>
        //                         </div>
        //                              <br/>
        //                              <div id="time-read">
        //                             <label className="col-sm-1" className="Label1"><strong>Часы:</strong></label>
        //                             <input onChange={props.changeHours} className="form-control" placeholder="Часы" defaultValue = {String(props.report.hour)}  type="text"/>
        //                         </div>
        //                              <br/>
        //                         <div id="note-read">
        //                         <label className="col-sm-1" className="Label1"><strong>Состав работ:</strong></label>
        //                             <textarea defaultValue = {props.report.text}className="form-control" id="note-read" maxlength="10000"
        //                             placeholder="Состав работ по проекту..."  rows="10"></textarea>
        //                         </div>
        //                         <hr className="normal"/>
        //                         <div className="text=rigth">
        //                             <button className="btn btn-success">
        //                             <i className="icon-save"></i>Сохранить</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //         </div>

        //     </div> 
        //     </div>        
            
        // </div>
    )
}

export default Reports;