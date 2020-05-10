import React from "react";
import "./report.css"

const Report =()=>{
    return(
        <div className="container">
            <div className="projName">
                Название проекта
                <select className="list1">
                    <option>Выберите из списка</option>
                    <option>Проект №1</option>
                    <option>Проект №2</option>
                    <option>Проект №3</option>
                    <option>Проект №4</option>
                    <option>Проект №5</option>
                </select>
            </div>

            <div className="Kurator">
                Куратор
                <div className="nameK">

                </div>
            </div>


            <div className="ProjStart">
                Начало
                <input type="date" id="start" className="proj-start"
                       value="2020-03-22"
                       min="2018-01-01" max="2020-12-31"/>
            </div>

            <div className="ProjEnd">
                Завершение
                <input type="date" id="end" className="proj-end"
                       value="2020-05-15"
                       min="2018-01-01" max="2020-12-31"/>
            </div>

            <div className="UseTime">
                Потраченное
                <br/>время
                <input className="time" placeholder={"Введите количество часов"}/>

            </div>

            <div className="Repr">
                Отчет
                <textarea className="rep"/>
            </div>








        </div>
    )
}

export default Report;