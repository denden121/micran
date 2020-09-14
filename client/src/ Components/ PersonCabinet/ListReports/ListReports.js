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
        time_report:'',
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
                console.log(result)
                this.setState({person_date: result, visible: true,time_report:result.time_report})
            })
            .catch(error => console.log('error', error));
    }
    handleOk = e => {
        this.setState({
          visible: false
        });
      };
    onChangeProjectName = (e,name) =>{
        this.setState({select_project:name})
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
                    let time =  this.state.time_report - reports.reports[index].hours
                    reports.reports.splice(index, 1)
                    if (this.state.select_report.index ===index){
                        document.querySelector('#hours-look').value = ''
                        document.querySelector('#body-report-look').value = ''
                        this.setState({person_date: reports,select_report:'',select_project:'',time_report:time})
                    }
                    else{
                        this.setState({person_date: reports,time_report:time})
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
        let nameProject = this.state.select_project.value
        console.log(this.state.select_project)
        if(hours && body && nameProject){
            console.log('gfffffffffffffffffffffffffffffffffffffff')
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
                console.log(this.state.person_date.pk,this.state.select_report.pk)

                let url = `http://127.0.0.1:8000/cabinet/${this.state.person_date.pk}/report/${this.state.select_report.pk}/`
                fetch(url, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        let report  = result;
                        let person_date = {...this.state.person_date}
                        let temp = person_date.reports
                        console.log(this.state.time_report,temp[this.state.select_report.index],report)
                        let time = this.state.time_report - temp[this.state.select_report.index].hours + report.hours
                        temp[this.state.select_report.index] = report
                        person_date.reports = temp
                        person_date.reports = temp
                        this.setState({person_date:person_date,time_report:time})
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
                        let time = this.state.time_report + result.hours
                        temp.reports.push(result);
                        this.setState({person_date:temp,time_report:time,select_report:{index:temp.reports.length-1,pk:result.pk}})
                    })
                    .catch(error => console.log('error', error));
            }
        }
    };
    onClickBlock=(event)=>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        const date = localStorage.getItem('date').replace(' ', '-')
        let formdata = new FormData();
        formdata.append("date", date)
        if(event.target.textContent === "Блокировать"){
            // console.log(event.target.textContent)
            // event.target.textContent = 'dadsads'
            formdata.append("action", "ban");
            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                redirect: 'follow',
                body:formdata
            }
            fetch(`http://127.0.0.1:8000/reports/person/${this.state.person_date.pk}/`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    this.setState({person_date: result})
                })
                .catch(error => console.log('error', error));
            event.target.textContent = "Разблокировать"
        }else{
            formdata.append("action", "unlock");
            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                redirect: 'follow',
                body:formdata
            }
            fetch(`http://127.0.0.1:8000/reports/person/${this.state.person_date.pk}/`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    this.setState({person_date: result})
                })
                .catch(error => console.log('error', error));
            event.target.textContent = "Блокировать"
        }
    }
    onClickUnlock=()=>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        const date = localStorage.getItem('date').replace(' ', '-')
        let formdata = new FormData();
        formdata.append("date", date);
        formdata.append("action", "unlock");
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body:formdata
        }
        fetch(`http://127.0.0.1:8000/reports/person/${this.state.person_date.pk}/`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log('fdssdf',result)
                this.setState({person_date: result})
            })
            .catch(error => console.log('error', error));
    }
    onClickCard = (index,pk) => {
        let report = this.state.person_date.reports[index]
        let temp_report = {index:index,pk:pk}
        this.setState({select_report:temp_report,select_project:{label:report.project,value:report.project_pk}})
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
                            onCancel={this.handleOk}
                            width={900}
                            footer={[
                                <Button  onClick={this.handleOk}>
                                    Отмена
                                </Button>,
                                <button  onClick={this.onClickBlock} className={this.state.person_date.status ? "btn btn-success btn-sm" :"btn btn-danger btn-sm"}>
                                    {this.state.person_date.status ? "Разблоктровать" : "Блокировать"}
                                </button>
                            ]}
                        >
                            <ReportModal
                                timeReport = {this.state.time_report}
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