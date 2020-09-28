import React, {Component} from "react"
import Groups from "./Groups/Groups"
import EditGroups from "../AddGroups/EditGroupps/EditGroupps";
import Table from 'react-bootstrap/Table'
import {Modal} from "antd";

class ManageGroups extends React.Component{
    componentDidMount() {
        this.loadGroups()
    }
    showModal = (index) => {
        // console.log(index)
        // console.log('fff',document.querySelectorAll('#input-name-group'))
        // document.getElementById('input-name').value = 'fdsf'
        this.setState({
            visible: true,
            select_index:index
        });
        this.setState({
            visible: false,
            // select_index:index
        });
        this.setState({
            visible: true,
            // select_index:index
        });

    };

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

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
            changed_date:{}
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
    onChangeCheckBox=(e)=>{
        let temp = {...this.state.changed_date}
        temp[e.target.value]  = e.target.checked
        if (e.target.defaultChecked === e.target.checked){
            delete temp[e.target.value]
        }
        console.log(temp)
        console.log(JSON.stringify(temp))
        this.setState({changed_date:temp})
    }
    loadSelectGroup=(pk)=>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        fetch(`http://127.0.0.1:8000/groups/${pk}/`, requestOptions)
            .then(response =>  response.json())
            .then(result => {
                console.log('date',result)
                this.setState({date: result})})
            .catch(error => console.log('error', error))

    }
    onClickEditGroup=(pk,index)=>{
        this.showModal(index)


        console.log('fff',document.querySelector('#input-name-group'))
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
                {/*<input type="text">dadsadsa</input>*/}
                <Modal
                    title="Редактирование групп"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={900}
                >
                    <EditGroups
                        onChangeCheckBox = {this.onChangeCheckBox}
                        date = {this.state.date}
                    />
                </Modal>
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