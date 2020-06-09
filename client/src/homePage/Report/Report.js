import React from "react";
import "./Report.css"
// import App from "../../App";
const Report=(props)=>{
    return (
        <div>
            <div className="container">
                <div className="projName">
                    Название проекта
                    {/*<select className="list1">*/}
                    {/*    <option>Выберите из списка</option>*/}
                    {/*    <option>Проект №1</option>*/}
                    {/*    <option>Проект №2</option>*/}
                    {/*    <option>Проект №3</option>*/}
                    {/*    <option>Проект №4</option>*/}
                    {/*    <option>Проект №5</option>*/}
                    {/*</select>*/}
                    <input id = "name_project_text" className = "name_project"/>
                </div>

                <div className="Kurator">
                    Куратор
                    <div>
                        <input id = "curator_name" className= "curator" />
                    </div>
                </div>


                {/*<div className="ProjStart">*/}
                {/*    Начало*/}
                {/*    <input type="date" id="start" className="proj-start"*/}
                {/*           value="2020-03-22"*/}
                {/*           min="2018-01-01" max="2020-12-31"/>*/}
                {/*</div>*/}

                {/*<div className="ProjEnd">*/}
                {/*    Завершение*/}
                {/*    <input type="date" id="end" className="proj-end"*/}
                {/*           value="2020-05-15"*/}
                {/*           min="2018-01-01" max="2020-12-31"/>*/}
                {/*</div>*/}

                <div className="UseTime">
                    Потраченное<br/>
                    время
                    <input className="time" id = "count_hours" placeholder={"Введите количество часов"}/>

                </div>

                <div className="Repr">
                    Отчет
                    <textarea  id ="report_text" className="rep"/>
                </div>

                <div>
                   {/* <button onClick={props.sendReport}>Отправить</button>*/}
                </div>
            </div>
        </div>
    )
}


export default Report;