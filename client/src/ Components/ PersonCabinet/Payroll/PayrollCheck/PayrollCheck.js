import React from 'react'
import "../Payroll.css"
import {Select, Input} from "antd"

const PayrollCheck =(props)=>{
    console.log(props)
    // console.log('1111',props.selectDepartment.label)
    return(
        <div>
            <div onChange={props.onChangeFilter} className="form-check text-left">
                <label className="checkbox">
                    <input checked={props.filter.hideSalary} value = {'hide-salary'} type="checkbox" className="form-check-input"/>
                    Скрыть колонки с результатами расчетов
                </label>
                <br/>
                <label className="checkbox">
                    <input checked={props.filter.hideNormTime} value={'hide-norm-time'} type="checkbox" className="form-check-input"/>
                    Скрыть нормы часов
                </label>
                <br/>
                <label className="checkbox">
                    <input checked={props.filter.hideZeroReport} value={'hide-zero-report'} type="checkbox" className="form-check-input"/>
                    Скрыть сотрудников с "нулевыми" отчетами
                </label>
                <br/>
                <label className="checkbox">
                    <input checked={props.filter.hideTechnician} value={'hide-technician'} type="checkbox" className="form-check-input"/>
                    Скрыть лаборантов
                </label>
                <br/>
                <label className="checkbox">
                    <input checked={props.filter.hideAnotherPeople} value={'hide-another-people'} type="checkbox" className="form-check-input"/>
                    Показывать только сотрудников НИИ СЭС
                </label>
            </div>
            <hr className="normal"/>
            {/*{console.log('log',props.selectDepartment)}*/}
            <div className="col-md-6 col-lg-12 text-left">
                <Select
                    onChange={props.onChangeSelectDepartments}
                    // defaultValue={props.filter.department.label}
                    // defaultActiveFirstOption={props.selectDepartment}
                    value={props.filter.department.label}
                    options = {props.departments}
                    placeholder="Выбрать"
                    style={{width:"100%"}}
                    className="text-left" >
                </Select>
            </div>
            <br/>
            <div className="col-md-6 col-lg-12 text-left">
                <Select
                    value={props.filter.subdepartment.label}
                    onChange={props.onChangeSelectSubDepartments}
                    options={props.subdepartments}
                    placeholder="Выбрать"
                    style={{width:"100%"}}
                    className="text-left" >
                </Select>
            </div>
        </div>
    )
}

export default PayrollCheck