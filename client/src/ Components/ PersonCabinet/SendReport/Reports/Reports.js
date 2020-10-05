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
                    <div className="col-sm-5 col-md-5">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <label className="col-sm-1" className="text-left"><strong>Список проектов</strong><hr className="normal"/></label>
                                <ProjectList
                                    status = {props.status}
                                    onClickDeleteCard = {props.onClickDeleteCard}
                                    onClickCard={props.onClickCard}
                                    listProject = {props.listProject}
                                />
                            </div>
                        </div>
                        <label className="Label2">
                            {props.status
                                ?''
                                : <button onClick={props.onClickNewProject} className="btn btn-success btn-sm">
                                Добавить проект</button>}
                        </label>
                        <br/>
                        <br/>
                        <div className="row no-gutters border rounded overflow-hidden flex-sm-row mb-4 h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <div className="total">
                                    Итого {props.timeReport}
                                </div>
                            </div>
                        </div>
                        <div className="row no-gutters border rounded overflow-hidden flex-sm-row mb-4 h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <div className="total">
                                    Время по карточке {props.timeSystem}
                                </div>
                            </div>
                        </div>
                        <div className="row no-gutters border rounded overflow-hidden flex-sm-row mb-4 h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <div className="total">
                                    Норма {props.timeNorm}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7 col-md-7">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static box">
                                <div className="box-content">
                                    <div id="time-read">
                                        <label className="col-sm-1" className="Label1"><strong>Проект:</strong></label>
                                        <select disabled={props.status} onChange={props.onChangeSelect} className="select2 form-control select2-offscreen" id='name_project'>
                                            <NameProjects listNameFrojects = {props.listNameFrojects}/>
                                        </select>
                                    </div>
                                    <br/>
                                    <div id="time-read">
                                        <label className="col-sm-1" className="Label1"><strong>Часы:</strong></label>
                                        <input
                                            readOnly={props.status}
                                            className="form-control"
                                            id = 'time_project'
                                            placeholder="Часы"
                                            // defaultValue = {props.report.hour}
                                            type="text"/>
                                    </div>
                                    <br/>
                                    <div id="note-read">
                                        <label className="col-sm-1" className="Label1"><strong>Состав работ:</strong></label>
                                        <textarea
                                            readOnly={props.status}
                                            // defaultValue = {props.report.text}
                                            className="form-control"
                                            id="body_report"
                                            maxlength="10000"
                                            placeholder="Состав работ по проекту..."
                                            rows="10">
                                        </textarea>
                                    </div>
                                    <hr className="normal"/>
                                    {props.status
                                        ?''
                                        :<label className="Label2">

                                        <button onClick={props.OnClickSaveReport} className="btn btn-success">
                                            Сохранить</button>
                                    </label>}
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