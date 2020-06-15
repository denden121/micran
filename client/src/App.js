import React, { Component } from 'react';
import './App.css';
import Auth1 from "./Auth1/Auth1";
// import Auth from './Components/Auth/Auth'
import {Route} from 'react-router-dom'
import {Redirect,Switch} from 'react-router-dom'
import PersArea from "./Components/homePage/PersArea";
import Registration from "./ Registration/registration"
// import Report from "./Components/homePage/Report/Report";
// import LookMain from "./Components/homePage/lookReport/lookMain/lookMain";

class  App extends Component{
    state = {
        token:'',
    }
    //обработка кнопки для авторизации
    authHandler = async () =>{
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        let login = document.getElementById("input-login").value
        let password = document.getElementById("input-password").value
        console.log(login,password)
        let urlencoded = new URLSearchParams();
        urlencoded.append("username", login);
        urlencoded.append("password", password);
        let requestOptions = {
            method: 'POST',
            body: urlencoded,
            redirect: 'follow',
            headers:myHeaders
        };
        //проверка логина и пароля
        await fetch("http://127.0.0.1:8000/token/", requestOptions)
            .then(response => response.json())
            .then(result =>console.log(this.setState({token:result.access})))
            .catch(error => this.setState({token:''}));
        console.log(this.state.token)
        localStorage.setItem('token',this.state.token)
        if(this.state.token ===undefined) {
            alert('incorrect')
        }
        // let myHeaders = new Headers();
        // myHeaders.append("Authorization",this.state.token);
        // let requestOptions1 = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     redirect: 'follow'
        // };
        // //запрос на получение данных для личного кабинета
        // fetch("http://127.0.0.1:8000/cabinet/1/", requestOptions1)
        //     .then(response =>response.json())
        //     .then(result => this.setState({cabinet:result[0].fields}))
        //     .catch(error => console.log('error', error));
    }
    /*sendReport=()=>{
        const hours = document.getElementById("count_hours").value
        const report = document.getElementById("report_text").value
        const nameProject = document.getElementById("name_project_text").value
        const curator = document.getElementById("curator_name").value
        let myHeaders = new Headers();
        myHeaders.append("Authorization", this.state.token);
        // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        let urlencoded = new URLSearchParams();
        urlencoded.append("project", nameProject);
        urlencoded.append("text", report);
        urlencoded.append("curator",curator );
        urlencoded.append("hour", hours);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/cabinet/reports/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }*/
    render() {
         const funcPersArea = () =>{
             if(this.state.token !== ''&& this.state.token !== undefined) {
                 return < PersArea date={this.state.cabinet}/>;
             }
             else{
                 return <Redirect to = '/'/>
             }
        }
        const funcAuth =()=> {
            if (this.state.token !== ''&& this.state.token !== undefined) {
                return <Redirect to = '/cabinet'/>
            }else {
                return <Auth1 authHandler = {this.authHandler}/>;
            }
        };
        // const funcReport= () =>{
        //     return <Report sendReport = {this.sendReport}/>
        // }
        return (
           <div className = 'App' >
               {/* <Switch>
                 <Route path='/' exact component = {funcAuth} />
                   <Route path='/cabinet' exact component={funcPersArea}/>
                   {/*<Route path ='/cabinet/report' exact component={funcReport}/>*/}
                   {/*<Route path='/cabinet/look' exact component={LookMain}/>*/}
                  {/* <Redirect to = '/cabinet'/>*/}
                   
              {/* </Switch>*/}
                <Switch>
                    
                   <Route path='/reg' exact component = {Registration} />
               </Switch>
           </div >
        );

    }
}

export default App;