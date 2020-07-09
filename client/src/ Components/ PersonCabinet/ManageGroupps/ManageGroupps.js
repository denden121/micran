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

        await fetch("http://127.0.0.1:8000/groups_admin/", requestOptions)
            .then(response => response.json())
            .then(result => this.setState({groups:result}))
        // let temp = Array.from(this.state.groups)
        // console.log('array', temp)
        console.log('state',this.state.groups[0])
    }

    state = {
        groups:{}
    }
    render(){
        return(
            <div className="container-fluid">
                <Table className="table" listGroup = {this.state.groups}>
                    <thead >
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">Название</th>
                            <th scope="col">Описание</th>
                            <th scope="col">Входит в группу</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                </tbody>
               </Table>
                
            </div>
        )
    }
}
export default ManageGroups;