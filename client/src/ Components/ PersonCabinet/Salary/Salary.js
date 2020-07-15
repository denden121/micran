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
            .then(result => this.setState({salary: result}))
            .catch(error => console.log('error', error))
        console.log('state',this.state.salary)
    }
    render() {
        return (
            <div className="container-fluid">
                
                <h3 className="text-left">Расчетный листок</h3>
                <br/>
                <h5 className="text-left">Коэффициенты</h5>
                <table className="koeff table-bordered">
                    <Koeff listGroup = {this.state.salaries}/>
                </table>
                <br/>
                <h5 className="text-left">Стимулирующие надбавки</h5>
                <table className="stimull table-bordered">
                    <Stimul listGroup = {this.state.salaries}/>
                </table>
                <br/>
                <h5 className="text-left">Начисления</h5>
                <table className="stimull table-bordered">
                    <Profit listGroup = {this.state.salaries}/>
                </table>
                <br/>
                <h5 className="text-left">Комментарий руководителя</h5>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <Comment/>
                        </div>
                    </div>
                </div>
                <h5 className="text-left">Итого</h5>
                <div className="row">
                    <div className="col-md-12">
                        <Total/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Salary