import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Reports from "./Reports/Reports"

class SendReport extends React.Component{
    state= {
        report:{},
        hours:''
    }
     async componentDidMount() {
         let token = localStorage.getItem('token')
         let myHeaders = new Headers();
         myHeaders.append("Authorization", token);

         let requestOptions = {
             method: 'GET',
             headers: myHeaders,
             redirect: 'follow'
         };
         let now = new Date()
         let month = now.getMonth() + 1, yaer = now.getFullYear()
         let url = 'http://127.0.0.1:8000/cabinet/reports/?month=' + month + '&year=' + yaer
         await fetch(url, requestOptions)
             .then(response => response.json())
             .then(result => this.setState({hours: result[0].fields.hours,text:result[0].fields.text}))
             .catch(error => console.log('error', error));
         console.log(this.state.report)
     }

    sendReport =async ()=>{
        let mentor = document.getElementById('mentorProject').value
        let time = document.getElementById('spendTime').value
        let body = document.getElementById('bodeReport').value
        let token = localStorage.getItem('token')

        let myHeaders = new Headers()
        myHeaders.append("Authorization", token);

        let formdata = new FormData();
        formdata.append("text", body);
        formdata.append("hour ", time);
        formdata.append("project", "test");
        formdata.append("curator", mentor);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

         await fetch("http://127.0.0.1:8000/cabinet/reports/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
         alert('Отчет отправлен')
         document.getElementById('mentorProject').value = ''
         document.getElementById('spendTime').value= ''
         document.getElementById('bodeReport').value= ''
    }

    changeReport=()=>{

    }
    changeHours=(event)=>{
        // event.target.value
        this.setState({hours:event.target.value})
        console.log(this.state.hours)

    }

    render() {
        return (
            <div>
                <div className container-fluid>
                    <Reports sendReport={this.sendReport}
                             changeReport = {this.changeReport}
                             changeHours = {this.changeHours}
                             report = {this.state}/>
                </div>
            </div>
        )
    }
}

export default SendReport