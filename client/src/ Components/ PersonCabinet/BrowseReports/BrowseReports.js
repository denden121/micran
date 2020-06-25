import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/Header"
import './BrowserReports.css'

class BrowseReports extends React.Component{
    state ={
        reports:{}
    }
    async componentDidMount() {
        let myHeaders = new Headers();
        let token = localStorage.getItem('token')
        myHeaders.append("Authorization", token);
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch("http://127.0.0.1:8000/cabinet/reports", requestOptions)
            .then(response => response.json())
            .then(result => this.setState({reports: {result}}))
            .catch(error => console.log('error', error));
        console.log(this.state.reports)
    }
    render() {
        return(
            <div className="container">
                     <div className="a">
                         <label className="Label1">Куратор проекта: 
                         <div id='mentorProject' type="text" className="form-control form-control-lg" placeholder="Введите ФИО куратора"></div>
                         </label>
                    </div>

                    <div className="b">
                        <label className="Label1">Затраченное время: 
                         <div id = 'spendTime' type="text" className="form-control form-control-lg" placeholder="Введите количество часов"></div>
                         </label>
                     </div>

                     <div className="c">
                         <label className="Label1">Отчет о проделанной работе:
                        <div id='bodeReport' type="text"className="form-control form-control-lg" placeholder="Введите текст отчета"></div>
                         </label>   
                    </div>           
                
            </div>
                
        )       
    }
}

export default BrowseReports