
import React from "react";


const Main =()=>{
    return(
        <div className="container">
            <div className="projName">
                <select size="3" multiple name="proj[]">
                    <option disabled>Выберите проект</option>
                    <option value="Проект №1">Проект №1</option>
                    <option selected value="Проект №2">Проект №2</option>
                    <option value="Проект №3">Проект №3</option>
                    <option value="Проект №4">Проект №4</option>
                </select>
            </div>

            <div className="Kurator">
                Куратор
                <div className="nameK">Куратор</div>
            </div>

            <div className="status">
                Статус
                <div className="process">В процессе</div>
            </div>

            <div className="start">
                Начало
                <div className="sta"></div>
            </div>

            <div className="end">
                Завершение
                <div className="en"></div>
            </div>






        </div>
    )
}

export default Main;