import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css'
import {NavLink} from 'react-router-dom'
import Calendar from './Calendar/Calendar';

const Navigation =(props)=>{
  return(
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <Calendar/>
              <ul className="nav flex-column">
                {/* <input type="month" className="form-control" min="2018-03"></input> */}
                <Calendar/>
                <li className="nav-item">                  
                  <a className="nav-link" href="http://localhost:3000/cabinet/send_reports">
                    <span data-feather="home"></span>
                    Send report
                    <span className="sr-only"></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='http://localhost:3000/cabinet/admin/view_groups'>
                    <span data-feather="shopping-cart"></span>
                    View groups
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='http://localhost:3000/cabinet/admin/logs'>
                    <span data-feather="shopping-cart"></span>
                    View logs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://localhost:3000/cabinet/admin/add_groups">
                    <span data-feather="layers"></span>
                    AddGroups
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/holiday">
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
                  <NavLink className="nav-link" to="/help">
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