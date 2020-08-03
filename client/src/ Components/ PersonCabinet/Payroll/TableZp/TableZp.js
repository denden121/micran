import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "./TableZp.css"
import BootstrapTable from 'react-bootstrap-table-next';

const FieldSalary = (props) =>{

    if (props.allSalary) {
        let result = Array.from(props.allSalary)
        return result.map((fields, index) => {
            console.log(fields)
            return (
                <tr>
                    <td scope="col">
                        <div>{index+1}</div>
                    </td>
                    <td scope="col">
                        <div>{fields.person.full_name}</div>
                    </td>
                    <td scope="col">
                        <div></div>
                    </td>
                    <td scope="col">
                        <div>{fields.person.work_days}</div>
                    </td>
                    <td scope="col">
                        <div>{fields.person.hours_worked}</div>
                    </td>
                    <td scope="col">
                        <div>{fields.person.time_norm}</div>
                    </td>
                    <td scope="col" className="red">
                        <div>{fields.person.time_off}</div>
                    </td>
                    <td scope="col">
                        <input type="text" defaultValue={fields.person.plan_salary} className={`in form-control ${fields.pk}.plan_salary`} placeholder="0.00%"></input>
                    </td>
                    <td scope="col">
                        <div></div>
                    </td>
                    <td scope="col">
                        <label className="checkbox Label2">
                            {fields.person.is_awarded
                            ? <input type="checkbox"  className="form-check-input" checked/>
                            : <input type="checkbox"  className="form-check-input" />}
                        </label>
                    </td>
                    <td scope="col">
                        <input type="text" className="in form-control" defaultValue={(100*fields.person.award)/fields.person.plan_salary}  placeholder="0.00%"/>
                    </td>
                    <td scope="col">
                        <input type="text" className={`in form-control ${fields.pk}.award`}defaultValue={fields.person.award} placeholder="0.00руб"/>
                    </td>
                    <td scope="col">
                        <div>{fields.person.salary_hand}</div>
                    </td>
                    <td scope="col">
                        <div>{(fields.person.salary_hand*1.13).toFixed(2)}</div>
                    </td>
                    <td scope="col">
                        <div></div>
                    </td>
                </tr>
            )
        })
    }
    return ''
}

const TableZp = (props) =>{
    console.log(props)
    return(
        <div className="tablezp">
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className="table-responsive" style={{overflow:"auto", maxWidth:"100%"}}>
                    <table className="table table-bordered table-sm">
                <tbody onBlur={props.onBlurSalary} className="zarplata">
                    <tr>
                        <th colSpan="7" scope="colgroup"></th>
                        <th colSpan="3" scope="colgroup">Начисления</th>
                        <th colSpan="5" scope="colgroup">Рассчитанные данные</th>
                    </tr>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col" >ФИО</th>
                        <td className="ico"></td>
                        <th scope="col" >Отраб.дни
                            <br/>(%)</th>
                        <th scope="col">Отчет,
                            <br/>час</th>
                        <th scope="col">Норма,
                            <br/>час</th>
                        <th scope="col">Пропуск,
                            <br/>час</th>
                        <th scope="col">Плановая ЗП,
                            руб</th>
                        <th colSpan="2" scope="colgroup">Депримирование за часы,
                            руб</th>
                        <th colSpan="2" scope="colgroup" >Премия</th>
                        <th scope="col">На руки,руб</th>
                        <th scope="col">Начислено,
                            <br/>руб</th>
                        <th scope="col">Ст-ть часов,руб</th>
                    </tr>
                   <tr>
                       <th colSpan="15" scope="colgroup" className="table-secondary">Отдел цифровых устройств</th>
                   </tr>
                    <FieldSalary allSalary = {props.allSalary}/>
                </tbody>
            </table>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TableZp