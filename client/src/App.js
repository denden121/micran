import React, { Component } from 'react';
import './App.css';
import Auth from './Auth/Auth'
import axios from 'axios'
class App extends Component {

    async authHandler() {
        let urlencoded = new URLSearchParams();
        urlencoded.append("username", "first");
        urlencoded.append("password", "w8$jdP#u7LMFRJn");
        let requestOptions = {
            method: 'POST',
            body: urlencoded,
            redirect: 'follow'
        };
        fetch("http://127.0.0.1:8000/test1/", requestOptions)
            .then(response => response.text())
            // .then(result => console.log(result.date))
    }
    render() {
        return ( <
            div className = "App" >
            <
            Auth authHandler = { this.authHandler }
            /> < /
            div >
        );
    }
}

export default App;