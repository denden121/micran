import React, {Component} from "react";
import Koeff from "./Koeff/Koeff";
import Stimul from "./Stimul/Stimul"



class Salary extends React.Component {
    state = {
        salary: {}
    }
    async componentDidMount() {
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        const url = "http://127.0.0.1:8000/salary/"
        await fetch(url, requestOptions)
            .then(response =>  response.json())
            .then(result => this.setState({actions: result}))
            .catch(error => console.log('error', error))
        console.log('state',this.state.salary)
    }
    render() {
        return (
            <div className="container-fluid">
                <h3 className="text-left">Расчетный листок</h3>
                <br/>
                <h5 className="text-left">Коэффициенты</h5>
                <table className="table-bordered">
                    <Koeff listGroup = {this.state.salaries}/>
                </table>
                <br/>
                <h5 className="text-left">Стимулирующие надбавки</h5>
                <br/>
                <table className="table-bordered">
                    <Stimul listGroup = {this.state.salaries}/>
                </table>
            </div>
        )
    }
}

export default Salary