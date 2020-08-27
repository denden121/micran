import React from "react"
import "./RegisterTable.css"

const ListProjects = (props) => {
    let result = Array.from(props.projects)
    return result = result.map((project,index) =>{
        return(
            <tr>
                <td>{project.fields.direction}</td>
                <td>{project.fields.name}</td>
                <td>{project.fields.manager}</td>
                <td>{project.fields.chief_designer}</td>
                <td>{project.fields.deputy_chief_designer}</td>
                <td>{project.fields.production_order}</td>
                <td>{project.fields.contract}</td>
                <td>{project.fields.client}</td>
                <td>{project.fields.type ? 'Внешний' : 'Внутрений'}</td>
                <td>{project.fields.status ? 'Зыкрыт' : 'Открыт'}</td>
                <td>{project.fields.report_availability ? 'Недоступен' : 'Доступен'}</td>
                <td>{project.fields.acceptance_vp?'да':'нет*'}</td>
            </tr>
        )
    })
}

const RegisterTable = (props) =>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className="responsive-table" style={{overflow:"auto", maxWidth:"100%"}}>
                        <div className="title text-left"><h5>Список проектов</h5></div>
                        <table className="table table-bordered table-sm" style={{marginBottom:"0"}}>
                            <thead>
                                <tr>
                                    <th style={{width:"80px"}}>Направление</th>
                                    <th>Проект</th>
                                    <th style={{width:"110px"}}>Руководитель</th>
                                    <th style={{width:"70px"}}>ГК</th>
                                    <th style={{width:"70px"}}>Зам ГК</th>
                                    <th>Заказ в пр-во</th>
                                    <th>№ договора</th>
                                    <th>Заказчик</th>
                                    <th style={{width:"50px"}}>Тип</th>
                                    <th style={{width:"55px"}}>Сост-е</th>
                                    <th style={{width:"60px"}}>В отчет</th>
                                    <th style={{width:"60px"}}>Приемка ВП</th>
                                </tr>
                            </thead>
                            <tbody className="reestr">
                                <ListProjects projects = {props.projects}/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterTable