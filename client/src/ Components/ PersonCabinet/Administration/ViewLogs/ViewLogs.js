import React, {Component} from "react"
import Logs from "./Logs/Logs"
import {Calendar} from "react-calendar";
import "./ViewLogs.css"
// import { DatePicker} from 'antd';


class ViewLogs extends React.Component{
    
    loadLogs= async ()=>{
        const token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };        
        const date = localStorage.getItem('date').split(' ')
        const url = `http://127.0.0.1:8000/admin/logs/?month=${date[0]}&year=${date[1]}`
        await fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => this.setState({logs:result}))
        console.log(this.state.logs)
    }
    loadLogsRange= async ()=>{
        const token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        const startDate = document.querySelector('#date_start').value
        const finshDate = document.querySelector('#date_finish').value
        const url = `http://127.0.0.1:8000/admin/logs_with_range/?start_date=${startDate}&end_date=${finshDate}`
        await fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => this.setState({logs:result}))
        console.log(this.state.logs)
        
    }
    componentDidMount() {
        this.loadLogs()
    }
    state = {
        logs:{}
    }
    render(){
        return(

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-lg-12 text-left">
                        <label className="text-left"><h5>Просмотр логов за промежуток</h5>
                            {/*<button className="btn btn-sm btn-primary">За неделю</button>*/}
                            {/*<button className="btn btn-sm btn-primary" style={{marginLeft:"5px"}}>За месяц</button>*/}
                            {/*<button className="btn btn-sm btn-primary" style={{marginLeft:"5px"}}>За год</button>*/}
                            <br/>
                        </label>
                    </div>
                    <div className="col-md-5 log">
                        <label className="text-left logg" style={{display:"flex"}}>
                            <input id={'date_start'} type="date" placeholder="дд/мм/гггг" className="form-control"></input>
                            <input id={'date_finish'}type="date" placeholder="дд/мм/гггг" className="form-control" style={{marginLeft:"5px"}}></input>
                            <button onClick={this.loadLogsRange} className="btn btn-sm btn-primary" style={{marginLeft:"5px"}}>Показать</button>
                            {/* <RangePicker /> */}
                        </label>                       
                    </div>
                   
                <div className="col-md-12 col-lg-12"> 
                <br/>                   
                        <table className="table table-hover table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">№</th>
                                    <th scope="col">IP</th>
                                    <th scope="col">Логин</th>
                                    <th scope="col">Действие</th>
                                    <th scope="col">Результат</th>
                                    <th scope="col">Время</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Logs listLogs = {this.state.logs}/>
                            </tbody>
                        </table>
                </div>
                </div>
                
            </div>
        )
    }
}
export default ViewLogs;