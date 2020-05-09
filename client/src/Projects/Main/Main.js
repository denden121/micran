import React from "react";
import "./Main.css"

const Main =()=>{
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

            <div className="status">
                Статус
                <div className="process">В процессе</div>
            </div>

            <div className="start">
                Начало
                <div className="sta">
                </div>
            </div>

            <div className="end">
                Завершение
                <div className="en">
                </div>
            </div>






        </div>
    )
}

export default Main;