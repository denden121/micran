import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header"
import SendReport from "../SendReport/SendReport"
import rend from '../../../index.js'
class Main extends Component{
    logOut = () =>{
        localStorage.setItem('token','')
        localStorage.setItem('checkReg','False')
        // rend()
  }
    render() {
        return (
            <div className="container">
                <Header clickLogOut={this.logOut}/>
                <Navigation/>
                <SendReport/>
            </div>
        )
    }
}

export default Main;