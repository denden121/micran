import React from "react"
import {NavLink} from "react-router-dom";
import {Button,Modal} from "antd"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PersonData from "../PersonData/PersonData"

class LogOut extends React.Component{
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
        logOut = () =>{
            localStorage.setItem('token','')
            localStorage.setItem('checkReg','False')
        }
    render(){       
      
        return(
            // <div className="container-fluid">
            //      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            //         <a className="navbar-brand col-sm-2 col-md-2 mr-0" href="http://localhost:3000/cabinet/person">Микран</a>
            //         <ul className="navbar-nav px-3">
            //         <li className="nav-item text-nowrap">
            //             <a onClick={props.clickLogOut} className="nav-link" href="#">Выйти</a>
            //         </li>
            //         </ul>
            //     </nav>            
            // </div>
            // <div className="d-flex flex-column flex-md-row  p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            //     <nav className="my-2 my-md-0 mr-md-3">
            //         <div className="text-right">
            //             <a onClick={props.clickLogOut} type="primary" size="small"  href="#" style={{marginRight:"10px"}}>Выйти</a>
            //         </div>
            //     </nav>  
            // </div>
            // <header className="blog-header py-3">
            //     <div className="text-right">
            //     <a onClick={this.showModal}><Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf',marginRight:"10px" }}>U</Avatar></a>
            //     <a onClick={this.logOut} className="btn btn-sm btn-outline-secondary" size="small"  href="#" style={{marginRight:"10px"}}>Выйти</a>
            //     </div>
            //     <hr/>
            //     <Modal
            //     title="Личные данные"
            //     visible={this.state.visible}
            //     onOk={this.handleOk}
            //     onCancel={this.handleCancel}
            //     width={700}>
            //         <PersonData/>
            //     </Modal>
            // </header>
            <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h4 class="my-0 mr-md-auto font-weight-normal" >Департамент СВЧЭ</h4>
                <nav class="my-2 my-md-0 mr-md-3">
                <a onClick={this.showModal}><Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar></a>
                </nav>
                {/* <a class="btn btn-outline-primary" href="#">Sign up</a> */}
                <a onClick={this.logOut} className="btn btn-sm btn-outline-secondary" size="small"  href="#" style={{marginRight:"10px"}}>Выйти</a>
                <Modal
                title="Личные данные"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                width={900}>
                    <PersonData/>
                </Modal>
          </div>
        )
    }
    
}
export default LogOut;