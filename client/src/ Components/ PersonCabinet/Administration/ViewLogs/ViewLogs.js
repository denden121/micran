import React, {Component} from "react"
import Logs from "./Logs/Logs"
import {Calendar} from "react-calendar";


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
    componentDidMount() {
        this.loadLogs()
    }
    state = {
        logs:{}
    }
    render(){
        return(

            <div className="container-fluid">
                {/*    <Calendar/>*/}
                {/*<Calendar/>*/}
                <div className="col-md-12 col-lg-12">
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
        )
    }
}
export default ViewLogs;