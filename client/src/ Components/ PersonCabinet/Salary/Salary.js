import React, {Component} from "react";
import './AddGroups.css'
import Activity from "./Activity/Activity"

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

            </div>
        )
    }
}

export default AddGroups