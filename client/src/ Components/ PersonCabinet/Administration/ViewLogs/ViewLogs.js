import React, {Component} from "react"
import Logs from "./Logs/Logs"


class ViewLogs extends React.Component{
    async componentDidMount() {
        const token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        const url = "http://127.0.0.1:8000/admin/logs/"
        await fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => this.setState({logs:result}))
        console.log(this.state.logs)
    }
    state = {
        logs:{}
    }
    render(){
        return(
            <div className="container-fluid">
                <table className="table">
                    <thead >
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
        )
    }
}
export default ViewLogs;