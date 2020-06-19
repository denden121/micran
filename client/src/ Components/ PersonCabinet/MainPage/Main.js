import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header"
import SendReport from "../SendReport/SendReport"
import rend from '../../../index.js'
import PersonData from "../PersonData/PersonData";
//import "./Main.css"

class Main extends Component{
    logOut = () =>{
        localStorage.setItem('token','')
        localStorage.setItem('checkReg','False')
        // rend()
  }
    render() {
        return (
            <div className="container">
                <div className="Head">
                    <Header clickLogOut={this.logOut}/>
                </div>

               <div className='Nav'>
                    <Navigation/>
        </div>

                <div className="Data">
                    <PersonData/>
                </div>
            </div>
        )
    }
}

export default Main;