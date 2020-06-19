import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css'

const Navigation =(props)=>{
    return(
        <div className="container">
          
            <div class="row">
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="cabinet/profile">
              <span data-feather="home"></span>
                Отправка отчетов <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file"></span>
              Просмотр отчетов
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="shopping-cart"></span>
              Реестр проектов
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="users"></span>
              Отпуск
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="bar-chart-2"></span>
              Зарплата
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="layers"></span>
              Помощь
            </a>
          </li>
          </ul>
        </div>
        </nav>
        
        </div>
        </div>
    )
}

export default Navigation;