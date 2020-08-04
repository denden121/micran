import React from 'react'
import "../Payroll.css"

const PayrollCheck =(props)=>{
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
        <select className="custom-select">
            <option selected>Выбрать</option>
            <option>Департамент СВЧ электроники</option>
        </select> 
        <br/>
        <br/>
        <select className="custom-select">
            <option selected>Выбрать</option>
            <option>Департамент СВЧ электроники</option>
        </select> 
        </div>
    )
}

export default PayrollCheck