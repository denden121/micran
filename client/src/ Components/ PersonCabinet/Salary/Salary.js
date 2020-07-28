import React, {Component} from "react";
import Koeff from "./Koeff/Koeff";
import Stimul from "./Stimul/Stimul"
import "./Salary.css"
import Profit from "./Profit/Profit"
import Comment from "./Comment/Comment"
import Total from "./Total/Total"

class Salary extends React.Component {
    state = {
        salary: {}
    }
    componentDidMount() {
        this.getSalary()
    }
    getSalary=async ()=>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        const date = localStorage.getItem('date').split(' ')
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        console.log('year',date[1])
        const url = `http://127.0.0.1:8000/salary/individual/?month=${date[0]}&year=${date[1]}`
        await fetch(url, requestOptions)
            .then(response =>  response.json())
            .then(result => this.setState({salary: result}))
            .catch(error => console.log('error', error))
        console.log('state',this.state.salary)
    }
    render() {
        return (
            <div className="container-fluid">
                <h3 className="text-left">Расчетный листок</h3>
                <br/>
                <h5 className="text-left">Начисления</h5>
                <table className="stimull table-bordered">
                    <Profit salary = {this.state.salary}/>
                </table>
                <br/>
                <h5 className="text-left">Итого</h5>
                <div className="row">
                    <div className="col-md-12">
                        <Total salary = {this.state.salary}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Salary