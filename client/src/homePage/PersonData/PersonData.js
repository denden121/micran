import React from 'react'
import './PersonData.css'

const PersonData =()=>{
    return(
        <div className="cont">
            <div className="birthDate">
                Дата рождения
                <div className="birth">
                </div>
            </div>

            <div className="sex">
                Пол
                <div className="se">
                </div>
            </div>

            <div className="work">
                Подразделение,
                <br />Должность
                <div className="dolzh">
                </div>
            </div>
            <div className="stazh">
                Стаж
                <div className="st">
                </div>
            </div>

            <div className="smena">
                Смена
                <div className="sm">
                </div>
            </div>

            <div className="date">
                Дата
                <br />трудоустройства
                <div className="datetr">
                </div>
            </div>
            <div className="late">
                Допустимое
                <br />время опоздания
                <div className="latetime">
                </div>
            </div>
            <div className="sovmes">
                Совместительство
                <div className="sov">
                </div>
            </div>
            <div className="groupps">
                Входит в группы
                <div className="grup">
                </div>
            </div>
        </div>
    )
}
export default PersonData