import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header"
import SendReport from "../SendReport/SendReport"
import rend from '../../../index.js'
import PersonData from "../PersonData/PersonData";
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
                {/*<Navigation/>*/}
                <PersonData/>
            </div>
        )
    }
}

export default Main;