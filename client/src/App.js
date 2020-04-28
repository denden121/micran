import React, {Component} from 'react';
import './App.css';
import Auth from './Auth/Auth'
import Cookies from 'js-cookie'
// import axios from 'axios'
class App extends Component{
    authHandler() {
        // let requestOptions1 = {
        //     method: 'GET',
        // };
        // // let temp;
        // fetch("http://127.0.0.1:8000/test1/", requestOptions1)
        //     .then(response => console.log(response.headers))
        // console.log(document.cookie)
        let csrftoken = Cookies.get('csrftoken')
        let myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        // myHeaders.append("HTTP_X_CSRFTOKEN", csrftoken);
        // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        // myHeaders.append("Cookie", "sessionid=w2n75sjwpjxzj1dy5hcpk7p20im00vwj; csrftoken=N6ufgbcKbSnq14DH3pJsIMVm6FIhqB6AvLelvGevrLbpPDTesgdhwggxZzk12xZH");
        let urlencoded = new URLSearchParams();
        urlencoded.append("username", "first");
        urlencoded.append("password", "w8$jdP#u7LMFRJn");
        let requestOptions = {
            // credentials: 'include',
            method: 'POST',
            // headers:myHeaders,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/test1/", requestOptions)
        //     .then(response => response.text())
            .then(result => console.log(result.date))
    }
    render() {
        return (
            <div className="App">
                <Auth authHandler={this.authHandler}/>
            </div>
        );
    }
}

export default App;
