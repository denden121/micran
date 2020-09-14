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
        total:'',
        status:''
    }
    componentDidMount(){
        this.loadReport()
        this.loadListProject()
    }
    OnClickSaveReport = ()=>{
        let time = document.querySelector('#time_project').value;
        let body = document.querySelector('#body_report').value;
        let token = localStorage.getItem('token');
        let project = document.querySelector('#name_project').value;
        const date = localStorage.getItem('date').split(' ');
        // console.log(time,body,token,project,date,this.state)
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
        if(this.state.select_report){
            let url = `http://127.0.0.1:8000/cabinet/report/${this.state.select_report}`
            fetch(url, requestOptions)
                .then(response => response.json())
                .then(result => {
                    let report  = result;
                    let temp = [...this.state.reports]
                    console.log('dssffs',temp,this.state.select_report)

                    for(let i = 0;i<temp.length;i++ ){
                        // console.log(temp[o])
                        if(temp[i].pk == this.state.select_report){

                            temp[i]=report;
                            break;
                        }
                    }
                    console.log(temp)
                    this.setState({reports:temp})
                })
                .catch(error => console.log('error', error));
        }
        else{
            const url = `http://127.0.0.1:8000/cabinet/reports/`
            fetch(url, requestOptions)
                .then(response => response.json())
                .then(result => {
                    let report  = result;
                    let temp = [...this.state.reports];
                    console.log('fdsfsdf',  report, temp)
                    temp.push(result);
                    this.setState({reports:temp})
                })
                .catch(error => console.log('error', error));
        }
        console.log(this.state)
    }
    loadReport = () =>{
        const token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        const now = localStorage.getItem('date').split(' ')
        const month = now[0]
        const year = now[1]
        const url = 'http://127.0.0.1:8000/cabinet/reports/?month=' + month + '&year=' + year
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.setState({reports :result.reports,
                                    timeNorm : result.time_norm,
                                    status: result.status})})
            .catch(error => console.log('error', error));
        let temp = this.state.reports.length
        let total = 0
        if (temp) {
            let tempTime = this.state.reports[temp - 1].fields.hour
            this.setState({select_report: this.state.reports[temp - 1].pk, timeCard: tempTime})
            document.querySelector('#time_project').value = this.state.reports[temp - 1].fields.hour
            document.querySelector('#body_report').value = this.state.reports[temp - 1].fields.text
            document.querySelector('#name_project').value = this.state.reports[temp - 1].fields.project_pk
            // console.log(this.state)
            for (let i of this.state.reports) {
                total += i.fields.hour
            }
        }
        this.setState({total: total})
    }
    loadListProject = () =>{
        const token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        const url = 'http://127.0.0.1:8000/cabinet/projects_for_reports'
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => this.setState({name_projects:result}))
            .catch(error => console.log('error', error));
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
    onClickDeleteCard =(pk, index) =>{
        // console.log('index',index)
        let token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        let requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };
        let url = `http://127.0.0.1:8000/cabinet/report/${pk}`
        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => {
                if (result === 'Success') {
                    let reports = [...this.state.reports]
                    // console.log(reports)
                    // console.log(index)
                    reports.splice(index, 1)
                    // console.log(reports)
                    this.setState({reports: reports})
                }else{
                    alert('не удалось удалить')
                }
            })
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
                        status = {this.state.status}
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