import React from 'react'
import "../Payroll.css"

const PayrollCheck =(props)=>{
    return(
        <div>
        <div className="form-check text-left">
            <label className="checkbox">
                <input type="checkbox" className="form-check-input"/>
                    Скрыть колонки с результатами расчетов
            </label>
            <br/>
            <label className="checkbox">
                <input type="checkbox" className="form-check-input"/>
                    Скрыть нормы часов
            </label>
            <br/>
            <label className="checkbox">
                <input type="checkbox" className="form-check-input"/>
                    Скрыть сотрудников с "нулевыми" отчетами
            </label>
            <br/>
            <label className="checkbox">
                <input type="checkbox" className="form-check-input"/>
                    Скрыть лаборантов
            </label>
            <br/>
            <label className="checkbox">
                <input type="checkbox" className="form-check-input"/>
                    Показывать только сотрудников НИИ СЭС
            </label>
        </div>
        <hr className="normal"/>
        <select className="select2 form-control select2-offscreen">
            Департамент СВЧ электроники                                                                               
        </select>
        <br/>
        <select className="select2 form-control select2-offscreen">
            Департамент СВЧ электроники                                                                               
        </select>
        </div>
    )
}

export default PayrollCheck