import React from "react"
import ListEmp from "./ListEmp/ListEmp"
import "./ListEmp/CardModal/CardModal.css"
import CardModal from "./ListEmp/CardModal/CardModal"
import "./Employees.css"
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
// import picture from "../Employees/avatar.png"


class Employees extends React.Component{
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
    onClickPerson = ()=>{
        document.querySelector('.background-modal').style.display = 'flex'
        console.log('person',document.querySelector('.background-modal').style.display)
    }
    render(){
        return(
            <div className="container-fluid">
                <h4 className="text-left">Список сотрудников</h4>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        
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
                
            </div>
        )
    }
}

export default Employees