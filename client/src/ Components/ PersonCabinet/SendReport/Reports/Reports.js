import React from "react"
import "./Reports.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Reports =(props)=>{
    return(
        <div className="contacdiner-fluid">
            <div className="row" >
                <div className="col-sm-8">
                    <div className="col-sm-12">
                        <div className="box">
                            <div className="box-content">
                                <div className="row">
                                    <div className="col-sm-12 has-tooltip" data-placement="top" title="Пользуйтесь поиском при выборе проекта">
                                        <p id="proj" className="col-sm-1"><strong>Проект</strong></p>
                                        <select className="select2 form-control select2-offscreen"
                                        id='CB_proj'>                                            
                                        </select>
                                        <p id="proj_note"></p>
                                    </div>
                                </div>
                                    <br/>
                                <div id="time-read">
                                    <p className="col-sm-1"><strong>Часы:</strong></p>
                                    <input onChange={props.changeHours} className="form-control" placeholder="Часы" defaultValue = {String(props.report.hour)}  type="text"/>
                                </div>
                                     <br/>
                                <div id="note-read">
                                    <p className="col-sm-3"><strong>Состав работ</strong></p>
                                    <textarea defaultValue = {props.report.text}className="form-control" id="note-read" maxlength="10000"
                                    placeholder="Состав работ по проекту..."  rows="10"></textarea>
                                </div>
                                <hr className="normal"/>
                                <div className="text=rigth">
                                    <button className="btn btn-success">
                                    <i className="icon-save"></i>Сохранить</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div> 
                    
            
        </div>
    )
}

export default Reports;