import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Reports from "./Reports/Reports"

class SendReport extends React.Component{
    state= {
        report:{},
        id:''
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
             .then(result => this.setState({report:result[0].fields,id:result[0].pk}))
             .catch(error => console.log('error', error));
         // console.log(this.state.report)
         console.log('state',this.state.report)
         console.log('id',this.state.id)
     }

    saveReport= async ()=>{
        let time = document.querySelector('#time_project').value
        let body = document.querySelector('#body_report').value
        let token = localStorage.getItem('token')
        let project = document.querySelector('#name_project').value
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let formdata = new FormData();
        formdata.append("text", body)
        formdata.append("hour ", time)
        formdata.append("project", project)
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        let url = `http://127.0.0.1:8000/cabinet/report/${this.state.id}`

        await fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        alert('Отчет отправлен')
    }

    render() {
        return (
            <div>
                <div className container-fluid>
                    <Reports saveReport = {this.saveReport}
                             report = {this.state.report}/>
                </div>
            </div>
        )
    }
}

export default SendReport