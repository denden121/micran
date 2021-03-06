import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "./TableZp.css"
import BootstrapTable from 'react-bootstrap-table-next';

const FieldSalary = (props) =>{ // Все зп
    if (props.allSalary) {
        let result = Array.from(props.allSalary)
        return result.map((fields, key) => {
            console.log(fields)
            // console.log(props.Filters.hideAnotherPeople, fields.person.SRI_SAS)
            if(Array.isArray(fields)) {
                console.log('я тут')
                return fields.map((field,key)=>{
                    console.log(field)
                    const fullName = field.name, // ФИО
                        workDays = field.work_days, // Отработаные дни
                        reportHours = field.hours_worked, // Время по отчету
                        normTime = field.time_norm, // Норма времени
                        timeOff = field.time_off, // Пропущенные часы
                        isAward = field.is_penalty, // Депримирование
                        penalty = field.penalty, // Депримирование
                        planSalary = field.plan_salary, // Плановая зп
                        allSalary = ((document.getElementById(``)) + field.award).toFixed(2), // Начисленно
                        handSalary = (allSalary * 0.87).toFixed(2), // зп на руки
                        hoursCoast = (allSalary / normTime).toFixed(2), // стоимость часов
                        pk = field.pk,
                        interestAward = (100 * field.award) / field.plan_salary,
                        award = field.award,
                        isHideZeroReport = !props.Filters.hideZeroReport | field.hours_worked !== 0, // условия для вывода( нулевых отчетов)
                        isHideTechnician = !props.Filters.hideTechnician | field.position !== 'Лаборант', // условие для вывода(лаборатнов)
                        isHideAnotherPeople = !props.Filters.hideAnotherPeople | field.SRI_SAS
                    // console.log()
                    console.log('тут тоже',isHideZeroReport & isHideTechnician & isHideAnotherPeople)
                    return (
                        // {console.lo}
                        isHideZeroReport & isHideTechnician & isHideAnotherPeople
                            ? <tr>
                                <td scope="col">
                                    <div>{key + 1}</div>
                                </td>
                                <td scope="col">
                                    <div>{fullName}</div>
                                </td>
                                {/*<td scope="col">*/}
                                {/*    <div></div>*/}
                                {/*</td>*/}
                                <td scope="col">
                                    <div>{workDays}</div>
                                </td>
                                <td scope="col">
                                    <div>{reportHours}</div>
                                </td>
                                {!props.Filters.hideNormTime // фильтр (убрать норму времени)
                                    ?<td scope="col">
                                        <div id={`${pk}.norm-time`}>{normTime}</div>
                                    </td>
                                    :''
                                }
                                <td scope="col" className="red">
                                    <div id={`${pk}.timeoff`}>{timeOff}</div>
                                </td>
                                <td scope="col">
                                    <input type="number"
                                           id={`${pk}.plan_salary`}
                                           defaultValue={planSalary}
                                           className={`in form-control`}
                                           placeholder="0.00">
                                    </input>
                                </td>
                                <td scope="col">
                                    <div>{penalty}</div>
                                </td>
                                <td scope="col">
                                    <label className="checkbox Label2">
                                        <input  type="checkbox"
                                                id={`${key}.${pk}.penalty`}
                                                className="form-check-input"
                                                defaultChecked={isAward}/>
                                    </label>
                                </td>
                                {!props.Filters.hideSalary // фильтр (убрать расчетные данные)
                                    ?<td scope="col">
                                        <input type="number"
                                               id={`${pk}.award_interest`}
                                               className="in form-control"
                                               defaultValue={interestAward.toFixed(2)}
                                               placeholder="0.00%"/>
                                    </td>:''}
                                {!props.Filters.hideSalary // фильтр (убрать расчетные данные)
                                    ?<td scope="col">
                                        <input type="number"
                                               id={`${pk}.award`}
                                               className={`in form-control`}
                                               defaultValue={award}
                                               placeholder="0.00руб"/>
                                    </td>:''}
                                {!props.Filters.hideSalary // фильтр (убрать расчетные данные)
                                    ?<td scope="col">
                                        <div id={`${pk}.salary_hand`}>{handSalary}</div>
                                    </td>:''}
                                {!props.Filters.hideSalary // фильтр (убрать расчетные данные)
                                    ?<td scope="col">
                                        <div id = {`${pk}.salary`}>{allSalary}</div>
                                    </td>:''}
                                {!props.Filters.hideSalary // фильтр (убрать расчетные данные)
                                    ?<td scope="col">
                                        <div id={`${pk}.cost`}>{hoursCoast}</div>
                                    </td>:''}
                            </tr>
                            :''// вывод если поле не подходт по условию фильтра
                    )
                })
            }
            else{
                return(
                    <tr>
                        <th colSpan="15" scope="colgroup" className="table-secondary">{fields.code + " " + fields.name}</th>
                    </tr>)
            }
        })
    }
    // return ''
}

const TableZp = (props) =>{
    // console.log(props)
    return(
        <div className="tablezp">
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className="table-responsive" style={{overflow:"auto", maxWidth:"100%"}}>
                        <table className="table table-bordered table-sm">
                            <tbody onChange={props.onChangeSalary} onBlur={props.onBlurSalary} className="zarplata">
                            <tr>
                                <th colSpan={!props.Filter.hideNormTime ?'6':'5'} scope="colgroup"></th>
                                <th colSpan="3" scope="colgroup">Начисления</th>
                                {!props.Filter.hideSalary
                                    ?<th colSpan="5" scope="colgroup">Рассчитанные данные</th>
                                    :''}
                            </tr>
                            <tr>
                                <th scope="col">№</th>
                                <th scope="col" >ФИО</th>
                                <th scope="col" >Отраб.дни
                                    <br/>(%)</th>
                                <th scope="col">Отчет,
                                    <br/>час</th>
                                {!props.Filter.hideNormTime
                                    ?<th scope="col">Норма,
                                        <br/>час</th>
                                    :''}
                                <th scope="col">Пропуск,
                                    <br/>час</th>
                                <th scope="col">Плановая ЗП,
                                    руб</th>
                                <th colSpan="2" scope="colgroup">Депримирование за часы,
                                    руб</th>
                                {!props.Filter.hideSalary
                                    ? <th colSpan="2" scope="colgroup">Премия</th>:''}
                                {!props.Filter.hideSalary
                                    ?<th scope="col">На руки,руб</th>:''}
                                {!props.Filter.hideSalary
                                    ?<th scope="col">Начислено,
                                        <br/>руб</th>:''}
                                {!props.Filter.hideSalary
                                    ?<th scope="col">Ст-ть часов,руб</th>
                                    :''}
                            </tr>
                            <FieldSalary allSalary = {props.allSalary} Filters={props.Filter}/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableZp