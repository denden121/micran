import React from 'react'
import "../Payroll.css"
import {Select} from "antd"

const PayrollCheck =(props)=>{
    // console.log('1111',props.selectDepartment.label)
    return(
        <div>
            <div onChange={props.onChangeFilter} className="form-check text-left">
                <label className="checkbox">
                    <input value={'hide-salary'} type="checkbox" className="form-check-input"/>
                    Скрыть колонки с результатами расчетов
                </label>
                <br/>
                <label className="checkbox">
                    <input value={'hide-norm-time'} type="checkbox" className="form-check-input"/>
                    Скрыть нормы часов
                </label>
                <br/>
                <label className="checkbox">
                    <input value={'hide-zero-report'} type="checkbox" className="form-check-input"/>
                    Скрыть сотрудников с "нулевыми" отчетами
                </label>
                <br/>
                <label className="checkbox">
                    <input value={'hide-technician'} type="checkbox" className="form-check-input"/>
                    Скрыть лаборантов
                </label>
                <br/>
                <label className="checkbox">
                    <input value={'hide-another-people'} type="checkbox" className="form-check-input"/>
                    Показывать только сотрудников НИИ СЭС
                </label>
            </div>
            <hr className="normal"/>
            {/*{console.log('log',props.selectDepartment)}*/}
            <div className="col-md-6 col-lg-12 text-left">
                <Select
                    onChange={props.onChangeSelectDepartments}
                    // defaultValue={props.selectDepartment.name}
                    // defaultActiveFirstOption={props.selectDepartment}
                    options = {props.departments}
                    placeholder="Выбрать"
                    style={{width:"100%"}}
                    className="text-left" >
                </Select>
            </div>
            <br/>
            <div className="col-md-6 col-lg-12 text-left">
                <Select
                    placeholder="Выбрать"
                    style={{width:"100%"}}
                    className="text-left" >
                </Select>
            </div>
        </div>
    )
}

export default PayrollCheck