import React from 'react'
import './Navigation.css'

class Nav extends React.Component{
    render(){
        return(
            <div>
                <nav className="project">
                    <a href="/project">Проекты</a>
                </nav>
                <nav className="otchet">
                    <a href="/otchet">Отчеты</a>
                </nav>
                <nav className="zarplata">
                    <a href="/zarplata">Зарплата</a>
                </nav>
                <nav className="otpusk">
                    <a href="/otpusk">Отпуск</a>
                </nav>
                <nav className="reestrproj">
                    <a href="/reestr">Реестр проектов</a>
                </nav>
                <nav className="time">
                    <a href="/time">Время по карточке</a>
                </nav>
                <nav className="kalendar">
                    <a href="/kalendar">Календарь</a>
                </nav>
                <nav className="help">
                    <a href="/help">Помощь</a>
                </nav>

            </div>
        )
    }
}
export default Nav