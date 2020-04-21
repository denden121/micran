import React, {Component} from 'react';
import './App.css';
import Auth from './Auth/Auth'
import axios from 'axios'
class App extends Component{
    state = {
        email:'first',
        password:'w8$jdP#u7LMFRJn'
    }
    authHandler(){
        axios.post('http://127.0.0.1:8000/login/',{'username':'first','password':'w8$jdP#u7LMFRJn'})
            .then(response => {
                console.log(response)
            })
    }
    render() {
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                {/*  <img src={logo} className="App-logo" alt="logo" />*/}
                {/*  <p>*/}
                {/*    Edit <code>src/App.js</code> and save to reload.*/}
                {/*  </p>*/}
                {/*  <a*/}
                {/*    className="App-link"*/}
                {/*    href="https://reactjs.org"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*  >*/}
                {/*    Learn React*/}
                {/*  </a>*/}
                {/*</header>*/}

                <Auth
                    authHandler={this.authHandler}/>

            </div>
        );
    }
}

export default App;
