import React from "react"
import "./Reports.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectList from "./ProjectList/ProjectList";

const NameProjects = (props) =>{
    // console.log(props)
    if (props.listNameFrojects) {
        const result = Array.from(props.listNameFrojects)
        return result.map((item) =>{
            return(
                <option value={item.pk}>{item.project_name}</option>
            )
        })
    }
    return ''
}

const Reports =(props)=>{
    return(
        <div className="container-fluid">
            <div className="report">
                <div className="row mb-2" >
                    <div className="col-md-5">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <label className="col-sm-1" className="Label1"><strong>Отчет о проделанной работе</strong></label>
                                <label className="col-sm-1" className="text-left"><strong>Список проектов</strong><hr className="normal"/></label>
                                <ProjectList
                                    onClickCard={props.onClickCard}
                                    listProject = {props.listProject}
                                />
                            </div>
                        </div>
                        <label className="Label2">
                            <button onClick={props.onClickNewProject} className="btn btn-success btn-sm">
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
                                        {/*<input className="form-control"*/}
                                        {/*       id='name_project'*/}
                                        {/*       placeholder="Проект"*/}
                                        {/*       defaultValue='MicRac'*/}
                                        {/*       type="text"/>*/}
                                        <select className="select2 form-control select2-offscreen" id='name_project'>
                                            <NameProjects listNameFrojects = {props.listNameFrojects}/>
                                        </select>
                                    </div>
                                    <br/>
                                    <div id="time-read">
                                        <label className="col-sm-1" className="Label1"><strong>Часы:</strong></label>
                                        <input className="form-control"
                                               id = 'time_project'
                                               placeholder="Часы"
                                               // defaultValue = {props.report.hour}
                                               type="text"/>
                                    </div>
                                    <br/>
                                    <div id="note-read">
                                        <label className="col-sm-1" className="Label1"><strong>Состав работ:</strong></label>
                                        <textarea
                                            // defaultValue = {props.report.text}
                                            className="form-control"
                                            id="body_report"
                                            maxlength="10000"
                                            placeholder="Состав работ по проекту..."
                                            rows="10">
                                        </textarea>
                                    </div>
                                    <hr className="normal"/>
                                    <label className="Label2">
                                        <button onClick={props.saveReport} className="btn btn-success">
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