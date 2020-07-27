import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css'
import {NavLink} from 'react-router-dom'
import Calendar from './Calendar/Calendar';
import Month from "react-calendar/dist/umd/YearView/Month";
const Navigation =(props)=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    {localStorage.getItem('date')}
                    <div className="sidebar-sticky">
                        <Calendar onClickDate = {props.onClickDate}
                                  onClickNext = {props.onClickNext}
                                  onClickPrevios = {props.onClickPrivious}/>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3000/cabinet/">
                                    <span data-feather="home"></span>
                                    Отправка отчетов
                                    <span className="sr-only"></span>
                                </a>
                            </li>
                            {localStorage.getItem('admin') == 'True'
                                ?<div>
                                    <li className="nav-item">
                                        <a className="nav-link" href='http://localhost:3000/cabinet/admin/view_groups'>
                                            <span data-feather="shopping-cart"></span>
                                            Просмотр групп
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='http://localhost:3000/cabinet/admin/logs'>
                                            <span data-feather="shopping-cart"></span>
                                            Просмотр логирования
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="http://localhost:3000/cabinet/admin/add_groups">
                                            <span data-feather="layers"></span>
                                            AddGroups
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="http://localhost:3000/cabinet/admin/play_roll">
                                            <span data-feather="layers"></span>
                                            Play_roll
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="http://localhost:3000/cabinet/admin/register">
                                            <span data-feather="layers"></span>
                                            Register
                                        </a>
                                    </li>
                                </div>
                                :
                                <div></div>
                            }
                            {/*<li className="nav-item">*/}
                            {/*    <NavLink className="nav-link" to="/holiday">*/}
                            {/*        <span data-feather="users"></span>*/}
                            {/*        Vacation*/}
                            {/*    </NavLink>*/}
                            {/*</li>*/}
                            <li className="nav-item">
                                <a className="nav-link" href="http://localhost:3000/cabinet/salary">
                                    <span data-feather="bar-chart-2"></span>
                                    Salary
                                </a>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <NavLink className="nav-link" to="/help">*/}
                            {/*        <span data-feather="layers"></span>*/}
                            {/*        Help*/}
                            {/*    </NavLink>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;