import React, {Component} from "react"
import Groups from "./Groups/Groups"
import Table from 'react-bootstrap/Table'

class ManageGroups extends React.Component{
    componentDidMount() {
        this.loadActions()
    }
    loadActions = async () =>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        await fetch("http://127.0.0.1:8000/admin/groups_admin/", requestOptions)
            .then(response => response.json())
            .then(result => this.setState({groups:result}))
        console.log('state',this.state.groups[0])
    }
    state = {
        groups:{}
    }
    render(){
        return(
            <div className="container-fluid">
                <table className="table table-hover table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">Название</th>
                            <th scope="col">Описание</th>
                            <th scope="col">Входит в группу</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Groups listGroup = {this.state.groups}/>
                    </tbody>
               </table>
            </div>
        )
    }
}
export default ManageGroups;