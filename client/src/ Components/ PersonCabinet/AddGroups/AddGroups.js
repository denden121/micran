import React,{Component} from "react";   
import './AddGroups.css'
import Activity from "./Activity/Activity"
import BrowseReports from '../BrowseReports/BrowseReports'

class AddGroups extends React.Component{
    state = {
        actions:{}
    }
    async componentDidMount() {
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        await fetch("http://127.0.0.1:8000/actions/", requestOptions)
            .then(response => response.json())
            .then(result => this.setState({actions:result}))
            .catch(error => console.log('error', error))
        console.log(this.state.actions[0].fields.action)
    }
    render() {
        return(           
            <div className="container">
                <div className="form-group">
                    <label for="GroupName">Название группы</label>
                        <input type="text" className="form-control"/>
                        <div className="form-check">
                        <Activity actions={this.state.actions}/>     
                        </div>               
                </div>
            </div>            
        )
    }
}

export default AddGroups