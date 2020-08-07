import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css'
// import {MenuFoldOutlined} from '@ant-design/icons';
import {NavLink} from 'react-router-dom'
import Calendar from './Calendar/Calendar';
import rend from "../../../index";;

const Month = {
    'Янв':1,
    'Фев':2,
    'Март':3,
    'Апр':4,
    'Май':5,
    'Июнь':6,
    'Июль':7,
    'Авг':8,
    'Сен':9,
    'Окт':10,
    'Ноя':11,
    'Дек':12
}

class Navigation extends Component{
    constructor(props){
        super(props)
        this.wrapperRef = React.createRef()
    }
    handleClick() {
        let wrapper = this.wrapperRef.current;
        // console.log(wrapper)
        wrapper.classList.toggle('is-nav-open')

    }
    onClickDate = (event) =>{
        let month = event.target.textContent
        month  = Month[month] ? Month[month]:localStorage.getItem('date').split(' ')[0]
        const temp_date=  localStorage.getItem('date').split(' ')[1]
        localStorage.setItem('date',`${month} ${temp_date}`)
        rend()
    }
    onClickNext=()=>{
        const temp_month = localStorage.getItem('date').split(' ')[0]
        const temp_year = localStorage.getItem('date').split(' ')[1]
        localStorage.setItem('date',`${temp_month} ${parseInt(temp_year)+1}`)
        rend()
    }
    onClickPrivious=()=>{
        const temp_month = localStorage.getItem('date').split(' ')[0]
        const temp_year = localStorage.getItem('date').split(' ')[1]
        localStorage.setItem('date',`${temp_month} ${parseInt(temp_year)-1}`)
        rend()
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div ref={this.wrapperRef} className="wrapper">
                    <div className="nav">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        {localStorage.getItem('date')}
                        {/*<Icon*/}
                        {/*className="nav__icon"*/}
                        {/*type="menu-fold"*/}
                        {/*onClick={this.handleClick.bind(this)}/>*/}
                        <div className="nav__body">
                        <div className="sidebar-sticky">
                            <Calendar onClickDate = {this.onClickDate}
                                      onClickNext = {this.onClickNext}
                                      onClickPrevios = {this.onClickPrivious}/>
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
                                        <li className="nav-item">
                                            <a className="nav-link" href="http://localhost:3000/cabinet/admin/employees">
                                                <span data-feather="layers"></span>
                                                Employees
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="http://localhost:3000/cabinet/admin/calendar">
                                                <span data-feather="layers"></span>
                                                Трудовой календарь
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
                        </div>
                        </nav>
                        </div>
                    </div>
                    </div>
                </div>
            
        )
    }
    
    }


    
export default Navigation;