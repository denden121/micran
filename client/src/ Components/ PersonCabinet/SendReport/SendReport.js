import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Reports from "./Reports/Reports"
import rend from "../../../index";

class SendReport extends React.Component{
    state= {
        reports:{},
        name_projects:{},
        select_report:'',
        timeNorm:'',
        timeCard:'',
        total:''
    }
    componentDidMount(){
        this.loadReport()
        this.loadListProject()
    }
    OnClickSaveReport = async ()=>{
        let time = document.querySelector('#time_project').value
        let body = document.querySelector('#body_report').value
        let token = localStorage.getItem('token')
        let project = document.querySelector('#name_project').value

        const date = localStorage.getItem('date').split(' ')
        if(this.state.select_report){
            let myHeaders = new Headers()
            myHeaders.append("Authorization", token)
            let formdata = new FormData();
            formdata.append("text", body)
            formdata.append("hour ", time)
            formdata.append("project", project)
            formdata.append('date',`${date[1]}-${date[0]}-3`)
            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
            let url = `http://127.0.0.1:8000/cabinet/report/${this.state.select_report}`
            await fetch(url, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            rend()
        }
        else{
            let myHeaders = new Headers()
            myHeaders.append("Authorization", token)
            let formdata = new FormData();
            formdata.append("text", body)
            formdata.append("hour ", time)
            formdata.append("project", project)
            formdata.append('date',`${date[1]}-${date[0]}-3`)
            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
            let url = `http://127.0.0.1:8000/cabinet/reports/`

            await fetch(url, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            this.loadReport()
        }
        console.log(this.state)
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
            .then(result => this.setState({reports :result.reports,
                                                timeNorm : result.time_norm}))
            .catch(error => console.log('error', error));
        let temp = this.state.reports.length
        let total = 0
        if (temp) {
            let tempTime = this.state.reports[temp - 1].fields.hour
            this.setState({select_report: this.state.reports[temp - 1].pk, timeCard: tempTime})
            document.querySelector('#time_project').value = this.state.reports[temp - 1].fields.hour
            document.querySelector('#body_report').value = this.state.reports[temp - 1].fields.text
            document.querySelector('#name_project').value = this.state.reports[temp - 1].fields.project_pk
            console.log(this.state)

            for (let i of this.state.reports) {
                total += i.fields.hour
            }
        }
        this.setState({total: total})
        // console.log(this.state.report)
        console.log('state',this.state)
        // console.log('id',this.state.id)
    }
    loadListProject = async () =>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        let url = 'http://127.0.0.1:8000/cabinet/projects_for_reports'
        await fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => this.setState({name_projects:result}))
            .catch(error => console.log('error', error));
    }
    onChangeSelect = (event) =>{
        console.log('event',event.target.value)
        let project =''

        // for(let i of this.state.reports){
        //     // if(i.fields.project_name == this.state.name_projects[event.target.value-1].project_name){
        //     //    this.onClickCard(j)
        //     //     console.log(j)
        //     // }
        //     j++
        // }
    }
    onClickCard = (index) =>{
        if (this.state.reports[index]) {
            let dateReport = this.state.reports[index].fields
            document.querySelector('#time_project').value = dateReport.hour
            document.querySelector('#body_report').value = dateReport.text
            document.querySelector('#name_project').value = dateReport.project_pk

            this.setState({select_report:this.state.reports[index].pk,timeCard:dateReport.hour})
        }
    }
    onClickNewProject = () =>{
        document.querySelector('#time_project').value = ''
        document.querySelector('#body_report').value = ''
        document.querySelector('#name_project').value = ''
        this.setState({select_report:''})
    }
    onClickDeleteCard =async (index) =>{
        // console.log('index',index)
        let token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        let requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };
        let url = `http://127.0.0.1:8000/cabinet/report/${index}`
        await fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        this.loadReport()
        this.setState({select_report:''})
        document.querySelector('#time_project').value = ''
        document.querySelector('#body_report').value = ''
        document.querySelector('#name_project').value = ''
        // console.log('state',this.state.report)
        // console.log('id',this.state.id)
    }
    render() {
        return (
            <div>
                <div className container-fluid>
                    <div className="row">
                        <div className="col-md-4">
                            <label className="text-left"><strong><h5>Отчет о проделанной работе</h5></strong></label>
                        </div>
                    </div>
                
                    <Reports
                        onClickDeleteCard = {this.onClickDeleteCard}
                        onClickCard = {this.onClickCard}
                        listProject = {this.state.reports}
                        listNameFrojects = {this.state.name_projects}
                        OnClickSaveReport = {this.OnClickSaveReport}
                        onClickNewProject = {this.onClickNewProject}
                        onChangeSelect = {this.onChangeSelect}
                        timeCard = {this.state.timeCard}
                        total = {this.state.total}
                        timeNorm = {this.state.timeNorm}
                    />
                </div>
            </div>
        )
    }
}

export default SendReport