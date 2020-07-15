import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Reports from "./Reports/Reports"

class SendReport extends React.Component{
    state= {
        reports:{},
    }
    componentDidMount(){
        this.loadReport()
    }
    saveReport = async ()=>{
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
    loadReport = async () =>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        let now = localStorage.getItem('date').split(' ')
        let month = now[0]
        let year = now[1]
        let url = 'http://127.0.0.1:8000/cabinet/reports/?month=' + month + '&year=' + year
        await fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => this.setState({reports:result,}))
            .catch(error => console.log('error', error));
        // console.log(this.state.report)
        console.log('state',this.state.report)
        console.log('id',this.state.id)
    }
    onClickCard = (index) =>{
        // console.log(index)
        // console.log(this.state.reports[index])
        let dateReport = this.state.reports[index].fields
        document.querySelector('#time_project').value = dateReport.hour
        document.querySelector('#body_report').value = dateReport.text
        document.querySelector('#name_project').value = dateReport.project_name
        // let myHeaders = new Headers()
        // myHeaders.append("Authorization", token)
        // let formdata = new FormData();
        // formdata.append("text", body)
        // formdata.append("hour ", time)
        // formdata.append("project", project)
        // let requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: formdata,
        //     redirect: 'follow'
        // };
        // let url = `http://127.0.0.1:8000/cabinet/report/${this.state.id}`
        //
        // await fetch(url, requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
        // alert('Отчет отправлен')
    }
    onClickNewProject = () =>{
        document.querySelector('#time_project').value = ''
        document.querySelector('#body_report').value = ''
        document.querySelector('#name_project').value = ''
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <div className container-fluid>
                    <Reports
                        onClickCard = {this.onClickCard}
                        listProject = {this.state.reports}
                        saveReport = {this.saveReport}
                        onClickNewProject = {this.onClickNewProject}
                    />
                </div>
            </div>
        )
    }
}

export default SendReport