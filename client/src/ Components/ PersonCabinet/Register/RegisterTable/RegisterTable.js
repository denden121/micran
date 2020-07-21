import React from "react"
import "./RegisterTable.css"

const RegisterTable =(props)=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="responsive-table">
                        <table className="reestr data-table-column-filter table table-bordered table-striped" style={{marginBottom:"0"}}>
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
                            <tbody>
                                <td></td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterTable