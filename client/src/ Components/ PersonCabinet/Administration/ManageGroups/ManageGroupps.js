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
            .then(result =>{
                this.setState({groups:result})
            })
    }
    onClickEditGroup=(pk)=>{
        let temp = {pk:pk}
        console.log(pk)
    }
    state = {
        groups:{}
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
                            <th scope="col">Ред</th>
                            <th scope="col">Описание</th>
                            <th scope="col">Входит в группу</th>
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