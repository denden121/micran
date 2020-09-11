import React from "react"
import { Collapse, Button, Modal } from 'antd';
import CollapseList from "./CollapseList/CollapseList"
import ReportsTable from "./ReportsTable/ReportsTable"
import ReportModal from "./ReportModal/ReportModal"


class ListReports extends React.Component {
    state = {
        departments:[],
        select_project:'',
        select_report:'',
        subdepartments:[],
        // select_subdepartments:'',
        reports:[],
        projects:[],
        visible: false,
        person_date:''
    }
    showModal = (pk) => {
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        const date = localStorage.getItem('date').replace(' ', '-')
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        fetch(`http://127.0.0.1:8000/reports/person/${pk}/?date=${date}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({person_date: result, visible: true,})
            })
            .catch(error => console.log('error', error));
    }
    handleOk = e => {
        this.setState({
          visible: false
        });
      };
    onChangeProjectName = (e) =>{
        this.setState({select_project:e})
    }
    componentDidMount() {
        this.loadDepartmentsAndProjects();
    }
    loadDepartmentsAndProjects=()=>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        fetch("http://127.0.0.1:8000/departments/simple/", requestOptions)
            .then(response =>  response.json())
            .then(result => {
                let actions = Array.from(result).map((department)=>{
                    return {value:`${department.pk}`,label:`${department.fields.code +' '+ department.fields.name}`}
                })
                this.setState({departments: actions})})
            .catch(error => console.log('error', error))
        fetch("http://127.0.0.1:8000/cabinet/projects/simple/", requestOptions)
            .then(response => response.json())
            .then(result => {
                let projects = Array.from(result).map((project)=>{
                    return {value:`${project.pk}`,label:`${project.name}`}
                })
                this.setState({projects:projects})
            })
            .catch(error => console.log('error', error));
    }
    onChangeSelectDepartments=(e)=>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        const date = localStorage.getItem('date').replace(' ','-')
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        fetch(`http://127.0.0.1:8000/reports/department/${e}/?date=${date}`, requestOptions)
            .then(response =>  response.json())
            .then(result => {
                let a = []
                let subdepartments = []
                for(let i of result){
                    a.push({name:i.name,
                        code:i.code,
                        pk:i.pk})
                    a.push(i.users)
                    subdepartments.push({value:`${i.pk}`,label:`${i.code+ ' '+i.name}`})
                }
                this.setState(
                    {reports: a,
                        subdepartments: subdepartments})
            })
            .catch(error => console.log('error', error))
    }
    onChangeSelectSubDepartments=(e)=>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        const date = localStorage.getItem('date').replace(' ','-')
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        fetch(`http://127.0.0.1:8000/reports/department/${e}/?date=${date}`, requestOptions)
            .then(response =>  response.json())
            .then(result => {
                let a = []
                for(let i of result){
                    a.push({name:i.name,
                        code:i.code,
                        pk:i.pk})
                    a.push(i.users)
                }
                this.setState(
                    {reports: a})
            })
            .catch(error => console.log('error', error))
    }
    onClickDeleteProject=(index,pk)=>{
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
                    let reports = {...this.state.person_date}
                    reports.reports.splice(index, 1)
                    if (this.state.select_report.index ===index){
                        document.querySelector('#hours-look').value = ''
                        document.querySelector('#body-report-look').value = ''
                        this.setState({person_date: reports,select_project:''})
                    }
                    else{
                        this.setState({person_date: reports})
                    }
                }else{
                    alert('не удалось удалить')
                }
            })
            .catch(error => console.log('error', error));
    }
    onClickNewProject=()=>{
        this.setState({select_report:'',select_project:''})
        document.querySelector('#hours-look').value = ''
        document.querySelector('#body-report-look').value = ''
    }
    onClickSaveReport=()=>{
        let hours = document.querySelector('#hours-look').value
        let body = document.querySelector('#body-report-look').value
        let nameProject = this.state.select_project
        if(hours && body && nameProject){
            let token = localStorage.getItem('token');
            const date = localStorage.getItem('date').split(' ').reverse().join('-');
            let myHeaders = new Headers()
            myHeaders.append("Authorization", token)
            let formdata = new FormData();
            formdata.append("text", body)
            formdata.append("hour ", hours)
            formdata.append("project", nameProject)
            formdata.append('date',`${date}-3`)
            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
            if(this.state.select_report){
                let url = `http://127.0.0.1:8000/cabinet/${this.state.person_date.pk}/report/${this.state.select_report.pk}/`
                fetch(url, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        let report  = result;
                        let person_date = {...this.state.person_date}
                        let temp = person_date.reports
                        temp[this.state.select_report.index] = report
                        // for(let i = 0;i<temp.length;i++ ){
                        //     if(temp[i].pk == this.state.select_report.pk){
                        //         temp[i] = report;
                        //         break;
                        //     }
                        // }
                        person_date.reports = temp
                        this.setState({person_date:person_date})
                    })
                    .catch(error => console.log('error', error));
            }
            else{
                const url = `http://127.0.0.1:8000/cabinet/${this.state.person_date.pk}/reports/`
                fetch(url, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        let report  = result;
                        let temp = {...this.state.person_date};
                        temp.reports.push(result);
                        this.setState({person_date:temp})
                    })
                    .catch(error => console.log('error', error));
            }
        }
    };
    onClickCard = (index,pk) => {
        let report = this.state.person_date.reports[index]
        let temp_report = {index:index,pk:pk}
        this.setState({select_report:temp_report,select_project:report.project})
        console.log('reports',this.state.person_date.reports[index])
        console.log(report.hours,report.text)
        console.log(document.querySelector('#hours-look').value = 'fdsfssd')
        // document.querySelector('#name-project-look').value =
        document.querySelector('#hours-look').value = report.hours
        document.querySelector('#body-report-look').value = report.text
    }
    render(){
        const { Panel } = Collapse;
        function callback(key) {
            console.log(key);
        }
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                    <h3 className="text-left">Список отчетов</h3>
                    <hr/>
                    <Collapse accordion defaultActiveKey={['1']} onChange={callback}>
                    <Panel header="Параметры отображения" className="text-left" key="1">
                        <CollapseList
                            onChangeSelectSubDepartments = {this.onChangeSelectSubDepartments}
                            onChangeSelectDepartments = {this.onChangeSelectDepartments}    
                            departments = {this.state.departments}
                            subdepartments = {this.state.subdepartments}/>
                    </Panel>
                    </Collapse>    
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-lg-12 text-left">
                        <Button>Импортировать отчеты</Button>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-lg-12">
                        <ReportsTable
                            reports = {this.state.reports}
                            onClickShowModal={this.showModal}
                        />
                            <Modal
                                title="Название дата"
                                visible={this.state.visible}
                                onOk={this.handleOk}
                                width={720}
                                okText="Блокировать"
                            >
                            <ReportModal
                                selectProjectName = {this.state.select_project}
                                onClickCard = {this.onClickCard}
                                onChangeProjectName = {this.onChangeProjectName}
                                onClickSaveReport = {this.onClickSaveReport}
                                nameProjects = {this.state.projects}
                                onClickNewProject = {this.onClickNewProject}
                                onClickDeleteProject = {this.onClickDeleteProject}
                                personDate = {this.state.person_date}
                            />
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListReports