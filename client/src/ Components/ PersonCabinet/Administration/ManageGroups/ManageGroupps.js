import React, {Component} from "react"
import Groups from "./Groups/Groups"
import EditGroups from "../AddGroups/EditGroupps/EditGroupps";
import Table from 'react-bootstrap/Table'
import {Modal} from "antd";

class ManageGroups extends React.Component{
    componentDidMount() {
        this.loadGroups()
    }
    handleOk = e => {
        const nameGroup = document.querySelector('#input-name').value
        document.querySelector('#input-name').value = ''
        const description = document.querySelector('#description').value
        document.querySelector('#description').value = ''
        const token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        let formdata = new FormData();
        formdata.append("name", nameGroup);
        formdata.append("actions", JSON.stringify(this.state.changed_date));
        formdata.append("description",description);
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        fetch(`http://127.0.0.1:8000/groups/${this.state.date.pk}/change/`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .then(result =>{
                console.log(result)
                let temp = [...this.state.groups]
                temp[this.state.select_index] = result
                this.setState({groups:temp})
            })
            .catch(error => console.log('error', error));
        this.setState({
            visible: false,
        });
    };

    loadGroups =  () =>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch("http://127.0.0.1:8000/admin/groups_admin/", requestOptions)
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                this.setState({groups:result})
            })
    }


    onClickEditGroup=(pk)=>{
        document.location='/cabinet/admin/edit_groups'
        localStorage.setItem('selectGroup',pk)
    }
    state = {
        groups:{},
        select_index:'',
        actions:{},
        date:{},
        changed_date:{}
    }
    render(){
        return(
            <div className="container-fluid">
               <div className="text-left">
                    <div className="text-left">
                            <button className="btn btn-sm btn-primary " onClick={()=>{document.location ='/cabinet/admin/add_groups'}}>Создать новую группу</button>
                            {/* <button className="btn btn-sm btn-success" style={{marginLeft:"5px"}} onClick={()=>{document.location='/cabinet/admin/edit_groups'}}>Редактирование групп</button> */}
                    </div>
                    <br/>
               <div className="table-responsive">
               <table className="table table-hover table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">Название</th>                            
                            <th scope="col">Описание</th>
                            <th scope="col">Входит в группу</th>
                            <th scope="col">Ред</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Groups onClickEditGroup={this.onClickEditGroup} listGroup = {this.state.groups}/>
                    </tbody>
               </table>
                   
               </div>
               </div>
               
            </div>
        )
    }
}
export default ManageGroups;