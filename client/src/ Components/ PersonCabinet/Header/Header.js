import React from "react"
import {NavLink} from "react-router-dom";
import {Button,Modal} from "antd"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PersonData from "../PersonData/PersonData"
import { Layout, Menu} from 'antd';
import "./Header.css"


const { Header, Content, Sider } = Layout;
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
            // 
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
            // <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
 
  // </div>
  <header className="masthead mb-auto" style={{backgroundColor:"#002140"}}>
    <div className="inner">
      <h5 style={{marginTop:"5px"}} className="masthead-brand">Система отчетности. Департамент СВЧ электронники</h5>
      <a onClick={this.logOut} className="exit btn btn-sm btn-outline-secondary" size="small"  href="#" style={{marginRight:"10px",marginTop:"5px"}}>Выйти</a>
      <nav className="nav nav-masthead justify-content-center">
        <a className="nav-link" onClick={this.showModal}><Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf',marginRight:"10px" }}>U</Avatar></a>
      </nav>
      <Modal
        title="Личные данные"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        width={900}>
        <PersonData/>
      </Modal>
    </div>
  </header>
                
        )
    }
    
}
export default LogOut;