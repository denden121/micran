import React, { Component } from 'react';
import './App.css';
import Auth from './Auth/Auth'
// import Cookies from 'js-cookie'
// import axios from 'axios'


class App extends Component {
    authHandler() {
        // let requestOptions1 = {
        // method: 'GET',
        // };
        // // let temp;
        // axios.get("http://127.0.0.1:8000/test1/", { withCredentials: true })
        // .then(response => console.log(response))
        // .then(response => {
        // Cookies.set('sessionid', response.headers['sessionid']);
        // Cookies.set('csrftoken', response.headers['csrftoken']);
        // })
        // axios.post("http://127.0.0.1:8000/test1/")
        // .then(response => console.log(response))
        // .then(response => {
        // Cookies.set('sessionid', response.headers['sessionid']);
        // Cookies.set('csrftoken', response.headers['csrftoken']);
        // })

        // console.log(document.cookie)
        // console.log(document.cookie)
        // console.log(document.cookie)
        // let csrftoken = Cookies.get('csrftoken')
        // let myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        // myHeaders.append("HTTP_X_CSRFTOKEN", csrftoken);
        // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        // myHeaders.append("Cookie", "sessionid=w2n75sjwpjxzj1dy5hcpk7p20im00vwj; csrftoken=N6ufgbcKbSnq14DH3pJsIMVm6FIhqB6AvLelvGevrLbpPDTesgdhwggxZzk12xZH");
        ///////////////////////////////////////////
        // var myHeaders = new Headers();
        // myHeaders.append("X-CSRFToken", "bmDVUynIdKzcBoLS1XPLI9DpMHOj4RUk2MCjYb3B5qXngZXiRs3IxLD4DCOKWeYt");
        // myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTg4NDE0NDUzLCJqdGkiOiJmMzI3YmYzODk5ZjA0MDAwOTNhZmQ1MWM0ZmU2NmQ0MSIsInVzZXJfaWQiOjF9.JGBbwWRiMHDEKEI88Q5g0q_3-SYSqM5FV3q6yx0deIY");
        // myHeaders.append("Cookie", "csrftoken=bmDVUynIdKzcBoLS1XPLI9DpMHOj4RUk2MCjYb3B5qXngZXiRs3IxLD4DCOKWeYt");

        let formdata = new FormData();
        formdata.append("username", "admin");
        formdata.append("password", "admin");

        let requestOptions = {
            method: 'POST',
            // headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/login/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))

        //////////////////////////////////////////
        // let urlencoded = new URLSearchParams();
        // urlencoded.append("username", "first");
        // urlencoded.append("password", "w8$jdP#u7LMFRJn");
        // let requestOptions = {
        //     credentials: 'include',
        //     method: 'POST',
        // headers: myHeaders,
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //     'X-CSRFToken': csrftoken
        // },
        // body: urlencoded,
        // redirect: 'follow'
        // };

        // fetch("http://127.0.0.1:8000/test1/", requestOptions)
        //     .then(response => response.text())
        // .then(result => console.log(result.date))
    }
    render() {
        return ( 
            <div className = "App" >
                <Auth authHandler = { this.authHandler }/>    
            </div >
        );
    }
}

export default App;