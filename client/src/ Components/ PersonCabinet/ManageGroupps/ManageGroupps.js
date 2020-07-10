import React, {Component} from "react"
import NameGroupps from "./NameGroupps/NameGroupps"
import Table from 'react-bootstrap/Table'

class ManageGroups extends React.Component{
    async componentDidMount() {
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
        // console.log('state',this.state.groups[0])
    }

    state = {
        groups:{}
    }
    render(){
        return(
            <div className="container-fluid">
                <table className="table">
                    <thead >
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">Название</th>
                            <th scope="col">Описание</th>
                            <th scope="col">Входит в группу</th>
                        </tr>
                    </thead>
                    <tbody>
                        <NameGroupps listGroup = {this.state.groups}/>
                    </tbody>
               </table>
            </div>
        )
    }
}
export default ManageGroups;