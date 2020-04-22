import React, {Component} from 'react';
import './App.css';
import Auth from './Auth/Auth'
import axios from 'axios'
class App extends Component{
    authHandler(){
        axios.post('http://127.0.0.1:8000/login/',{'username':'first','password':'w8$jdP#u7LMFRJn'})
            .then(response => {
                console.log(response)
            })
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
