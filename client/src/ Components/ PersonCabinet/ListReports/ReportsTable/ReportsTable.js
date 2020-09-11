import React from "react"
import {Modal} from "antd"

const ReportsTable =(props)=>{
    console.log(props)
    return(
        <div className="table-responsive">
            <table className="table table-bordered table-sm">
                <thead>
                    <tr>
                        <th scope="col">№ п/п</th>
                        <th scope="col">ФИО</th>
                        <th scope="col">Отчет*</th>
                        <th scope="col">Норма</th>
                        <th scope="col">Orion</th>
                        <th scope="col">Проверил</th>
                        <th scope="col">Блокировал</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="7" scope="colgroup" className="table-secondary">Отдел</td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td></td>
                        <td><a onClick={props.onClickShowModal} style={{cursor:"pointer"}}>пппп</a></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}

export default ReportsTable