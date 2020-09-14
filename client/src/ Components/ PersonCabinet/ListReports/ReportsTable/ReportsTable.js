import React from "react"
import {Modal} from "antd"

const Report =(props)=>{
    return props.reports.map((item,key)=>{
        console.log(item.users)
        return Array.isArray( item)
            ? item.map((user)=> {
                // console.log( user.SRI_SAS, props.isNIS, !user.has_report , !props.isAllList)
                return (user.SRI_SAS === false && props.isNIS === true) || (!user.has_report && !props.isAllList)
                    ?""
                    :<tr>
                        <td scope="row"></td>
                        <td><a onClick={props.onClickShowModal.bind(this,user.pk)} style={{cursor: "pointer"}}>{user.name}</a></td>
                        <td>{user.time_report}</td>
                        <td>{user.time_norm}</td>
                        <td>{user.time_system}</td>
                        <td>{user.checker}</td>
                        <td>{user.banned}</td>
                    </tr>
            })
            : <tr>
                <td colSpan="7" scope="colgroup" className="table-secondary">{item.code + ' ' +item.name}</td>
            </tr>
    })
}

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
                    <Report
                        isAllList = {props.isAllList}
                        isNIS = {props.isNIS}
                        onClickShowModal={props.onClickShowModal} reports ={props.reports}/>
                </tbody>
            </table>
        </div>
    )
}

export default ReportsTable