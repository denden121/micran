import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css'
import {NavLink} from 'react-router-dom'
const Navigation =(props)=>{
  return(
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink className="nav-link" to="cabinet/send_reports">
                    <span data-feather="home"></span>

                    Отправка отчетов
                    <span className="sr-only"></span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="cabinet/view_reports">
                    <span data-feather="file"></span>

                    Просмотр отчетов
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="cabinet/view_reports">
                    <span data-feather="shopping-cart"></span>
                    Реестр проектов
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="cabinet/holiday">
                    <span data-feather="users"></span>
                    Отпуск
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="cabinet/salary">
                    <span data-feather="bar-chart-2"></span>
                    Зарплата
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="cabinet/help">
                    <span data-feather="layers"></span>
                    Помощь
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

        </div>
      </div>
  )
}

export default Navigation;