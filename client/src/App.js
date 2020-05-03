import React, { Component } from 'react';
import './App.css';
import Auth from './Auth/Auth'
import PersArea from "./homePage/PersArea";

// import axios from 'axios'


class App extends Component {
    authHandler() {
        let formdata = new FormData();
        formdata.append("username", "admin");
        formdata.append("password", "admin");

        let requestOptions = {
            method: 'POST',
            // headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/token/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
    }
    render() {
        return ( 
            //<div className = "App" >
              //  <Auth authHandler = { this.authHandler }/>
            //</div >
            <div className={App}>
                <PersArea/>
            </div>
        );
    }
}

export default App;