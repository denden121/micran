import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
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
            <div>Hello</div>
               
            
                
        )       
    }
}

export default BrowseReports