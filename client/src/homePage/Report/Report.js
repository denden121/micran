import React, {Component} from "react";
import "./Report.css"
import App from "../../App";
class Report extends Component{
    sendReport(){
        const hours = document.getElementById("count_hours").value
        const report = document.getElementById("report_text").value
        const nameProject = document.getElementById("name_project").value
        const token= App.state.token
        const curator = document.getElementById("curator").value
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        let urlencoded = new URLSearchParams();
        urlencoded.append("project", nameProject);
        urlencoded.append("text", report);
        urlencoded.append("curator", );
        urlencoded.append("hour", hours);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/cabinet/2/reports/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    render() {
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
                        <input  id = "name_project"/>
                    </div>

                    <div className="Kurator">
                        Куратор
                        <div className="nameK">
                            <input id = "curator" />
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
                        Потраченное
                        <br/>время
                        <input className="time" id = "count_hours" placeholder={"Введите количество часов"}/>

                    </div>

                    <div className="Repr">
                        Отчет
                        <textarea  id ="report_text" className="rep"/>
                    </div>

                    <div>
                        <button onClick={this.sendReport}>Отправить</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Report;