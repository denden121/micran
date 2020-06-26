import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
import './BrowserReports.css'
import '../LookReport/ProjectCard/ProjectCard'
import ProjectCard from '../LookReport/ProjectCard/ProjectCard';



const NewReports =(props)=>{
    let temp = Array.from(props.reports)
    return(
        temp.map((report,index) =>{
            console.log(report)
            return(
                <ProjectCard
                    key={index}
                    project={report.fields.project}
                    curator={report.fields.curator}
                    hour={report.fields.hour}
                    text={report.fields.text}
                />    
            )
        })
    )
}
class BrowseReports extends React.Component{
    state ={
        reports:{},
        text:'',
        hours:'',
        mentor:'',
        nameProject:''
    }
    async componentDidMount() {
        let myHeaders = new Headers();
        let token = localStorage.getItem('token')
        myHeaders.append("Authorization", token);
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch("http://127.0.0.1:8000/cabinet/reports", requestOptions)
            .then(response => response.json())
            .then(result => this.setState({reports: result}))
            .catch(error => console.log('error', error));
        console.log(this.state.reports[0].fields.text)
    }

    render() {
        
        return(
        // <div>{ this.state.reports.result[0].fields.text }</div>
               
        <div className="container">
            <NewReports reports={this.state.reports}/>
        </div>
                
        )       
    }
}

export default BrowseReports