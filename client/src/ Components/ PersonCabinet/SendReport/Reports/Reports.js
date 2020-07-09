import React from "react"
import "./Reports.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../Card/Card"

const Reports =(props)=>{
    return(
    //    <div>
    //        <Card/>
    //    </div>
        <div className="container-fluid">
            <div className="report">
            <div className="row mb-2" >
            <div className="col-md-5">
                    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                        <label className="col-sm-1" className="Label1"><strong>Отчет о проделанной работе</strong></label>
                        <div id="proj-list">
                            <label className="col-sm-1" className="Label1"><strong>Список проектов</strong></label>
                            <br/>
                            <hr className="normal"/>
                            {props.projects}
                            <br/>
                            <label className="Label2">
                                <button className="btn btn-danger btn-sm"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>Удалить
                                </button>                            
                            </label>
                            <br/>
                             <hr className="normal"/>
                        </div>
                        </div>
                    </div>
                    <label className="Label2">
                        <button className="btn btn-success btn-sm">
                        Добавить проект</button>
                    </label>
                    <br/>
                    <br/>
                    <div className="row no-gutters border rounded overflow-hidden flex-sm-row mb-4 h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <div className="total">
                                Итого
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters border rounded overflow-hidden flex-sm-row mb-4 h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <div className="total">
                                Время по карточке
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters border rounded overflow-hidden flex-sm-row mb-4 h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <div className="total">
                                Норма
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static box">
                            <div className="box-content">
                                <div id="time-read">
                                    <label className="col-sm-1" className="Label1"><strong>Проект:</strong></label>
                                    {/* <input onChange={props.changeHours} className="form-control" placeholder="Часы" defaultValue = {String(props.report.hour)}  type="text"/> */}
                                    <select className="select2 form-control select2-offscreen"
                                        id='CB_proj'>                                            
                                        </select>
                                </div>
                                     <br/>
                                     <div id="time-read">
                                    <label className="col-sm-1" className="Label1"><strong>Часы:</strong></label>
                                    <input onChange={props.changeHours} className="form-control" placeholder="Часы" defaultValue = {String(props.report.hour)}  type="text"/>
                                </div>
                                     <br/>
                                <div id="note-read">
                                <label className="col-sm-1" className="Label1"><strong>Состав работ:</strong></label>
                                    <textarea defaultValue = {props.report.text}className="form-control" id="note-read" maxlength="10000"
                                    placeholder="Состав работ по проекту..."  rows="10"></textarea>
                                </div>
                                <hr className="normal"/>
                                <label className="Label2">
                                    <button className="btn btn-success">
                                    Сохранить</button>
                                </label>
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