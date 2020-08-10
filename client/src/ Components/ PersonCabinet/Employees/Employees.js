import React from "react"
import ListEmp from "./ListEmp/ListEmp"
import "./ListEmp/CardModal/CardModal.css"
import CardModal from "./ListEmp/CardModal/CardModal"
import "./Employees.css"
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
// import picture from "../Employees/avatar.png"


class Employees extends React.Component{
<<<<<<< HEAD
    state = {
        workers:{}
    }
=======
    state = { visible: false };
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
>>>>>>> origin/Deploy
    onClickPerson = ()=>{
        document.querySelector('.background-modal').style.display = 'flex'
        console.log('person',document.querySelector('.background-modal').style.display)
    }
    loadWorkers = async () =>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        const url = `http://127.0.0.1:8000/workers/all/`
        await fetch(url, requestOptions)
            .then(response =>  response.json())
            .then(result => this.setState({workers: result}))
            .catch(error => console.log('error', error))
        console.log('state',this.state.workers)

    }
    componentDidMount() {
        this.loadWorkers()
    }

    render(){
        return(
            <div className="container-fluid">
                <h4 className="text-left">Список сотрудников</h4>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        
<<<<<<< HEAD
                        <ListEmp workers={this.state.workers} onClickPerson={this.onClickPerson}/>
                    </div>
                </div>
=======
                        <ListEmp onClickShowModal={this.showModal}/>
                    </div>
                </div>
                                
                <Modal
                    title="Карточка сотрудника"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <CardModal/>

                </Modal>
                
>>>>>>> origin/Deploy
            </div>
        )
    }
}

export default Employees