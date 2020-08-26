import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../Navigation/Navigation";
// import Header from "../Header/Header"
import LogOut from "../Header/Header"
import SendReport from "../SendReport/SendReport"
// import rend from '../../../index.js'
import PersonData from "../PersonData/PersonData";
import "./Main.css"
import Switch from "react-bootstrap/cjs/Switch";
import {Redirect, Route} from "react-router-dom";
import AddGroups from "../Administration/AddGroups/AddGroups";
import ManageGroupps from "../Administration/ManageGroups/ManageGroupps";
import ViewLogs from "../Administration/ViewLogs/ViewLogs";
import Salary from "../Salary/Salary"
import rend from "../../../index";
import Payroll from "../Payroll/Payroll"
import Register from "../Register/Register"
import NewProject from "../Register/NewProject/NewProject";
import UnitProjects from "../Register/UnitProjects/UnitProjects"
import Employees from "../Employees/Employees"
import Interval from "../WorkCalendar/Interval/Interval"
import SystemTime from "../SystemTime/SystemTime"
import Structure from "../Tree/Structure"
import { DatePicker } from 'antd';
import { Layout, Menu, PageHeader,Button} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    
  } from '@ant-design/icons';
import Calendar from "../Navigation/Calendar/Calendar"
import picture from "../MainPage/micran1.png"


  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

class Main extends Component{
    state = {
        collapsed: false,
      };
     
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };

    logOut = () =>{
        localStorage.setItem('token','')
        localStorage.setItem('checkReg','False')
    }
    

    render() {
      function onChange(date, dateString) {
        console.log(date, dateString);
      }
      
        if(!localStorage.getItem('date')){
            let date = new Date()
            localStorage.setItem('date',`${date.getMonth()+1} ${date.getFullYear()} `)
        }

        function onChange(month, dateString) {
          console.log(month, dateString);
        }
        return (
          
            <Layout style={{ minHeight: '100vh', paddingTop:0,margin:0 }}>
              
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{backgroundColor:"white"}}>
                <div style={{backgroundColor:"white",color:"#fff"}}>
                <img src={picture} alt="" className="img-fluid"></img>
                </div>
                
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                <DatePicker onChange={onChange} picker="month"/>
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                      <a  href="http://localhost:3000/cabinet/">
                        <span data-feather="home"></span>
                          Отправка отчетов
                        <span className="sr-only"></span>
                      </a>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <a  href='http://localhost:3000/cabinet/admin/view_groups'>
                          <span data-feather="shopping-cart"></span>
                            Просмотр групп
                        </a>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <a  href='http://localhost:3000/cabinet/admin/logs'>
                        <span data-feather="shopping-cart"></span>
                          Просмотр логирования
                      </a>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <a href="http://localhost:3000/cabinet/admin/play_roll">
                        <span data-feather="layers"></span>
                          Расчетный лист
                      </a>
                    </Menu.Item>
                    <Menu.Item key="5">
                      <a  href="http://localhost:3000/cabinet/admin/register">
                        <span data-feather="layers"></span>
                          Реестр проектов
                      </a>
                    </Menu.Item>
                    <Menu.Item key="6">
                      <a  href="http://localhost:3000/cabinet/admin/employees">
                        <span data-feather="layers"></span>
                          Сотрудники    
                      </a>
                    </Menu.Item>
                    <Menu.Item key="7">
                      <a  href="http://localhost:3000/cabinet/admin/calendar">
                        <span data-feather="layers"></span>
                          Трудовой календарь
                      </a>
                    </Menu.Item>
                    <Menu.Item key="8">
                      <a  href="http://localhost:3000/cabinet/admin/system_time">
                        <span data-feather="layers"></span>
                          Система учета времени
                      </a>  
                    </Menu.Item>
                    <Menu.Item key="9">
                      <a  href="http://localhost:3000/cabinet/admin/structure">
                        <span data-feather="layers"></span>
                          Структура подразделений
                      </a>
                    </Menu.Item>
                </Menu>
                
                </Sider>
                
        <Layout className="site-layout">
        
          <Content >
            <div className="Data" style={{backgroundColor:"white",paddingTop:"20px"}}>
            <LogOut clickLogOut={this.logOut}/>
                    <Switch>
                        <Route path='/cabinet/' exact component = {SendReport}/>
                         <Route path='/cabinet/person' exact  component = {PersonData}/>
                         <Route path='/cabinet/salary' exact  component = {Salary}/>
                         <Route path='/cabinet/admin/add_groups' exact component = {AddGroups}/>
                         <Route path='/cabinet/admin/logs' exact component = {ViewLogs}/>
                         <Route path='/cabinet/admin/view_groups' exact component = {ManageGroupps}/>
                         <Route path='/cabinet/admin/play_roll' exact  component = {Payroll}/>
                         <Route path='/cabinet/admin/register' exact  component = {Register}/>  
                         <Route path='/cabinet/admin/new_project' exact  component = {NewProject}/>
                         <Route path='/cabinet/admin/unit_projects' exact  component = {UnitProjects}/>   
                         <Route path='/cabinet/admin/employees' exact  component = {Employees}/>  
                         <Route path='/cabinet/admin/calendar' exact  component = {Interval}/> 
                         <Route path='/cabinet/admin/system_time' exact  component = {SystemTime}/> 
                         <Route path='/cabinet/admin/structure' exact  component = {Structure}/> 
                     </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
            // <div className="container">
            //     <div className="Head">
            //         <Header clickLogOut={this.logOut}/>
            //     </div>

            //     <div className='Nav'>
            //         <Navigation
            //             onClickDate = {this.onClickDate}
            //             onClickNext = {this.onClickNext}
            //             onClickPrivious = {this.onClickPrivious}
            //         />
            //     </div>
                

            //     <div className="Data">
            //         <Switch>
            //             <Route path='/cabinet/' exact component = {SendReport}/>
            //             <Route path='/cabinet/person' exact  component = {PersonData}/>
            //             <Route path='/cabinet/salary' exact  component = {Salary}/>
            //             <Route path='/cabinet/admin/add_groups' exact component = {AddGroups}/>
            //             <Route path='/cabinet/admin/logs' exact component = {ViewLogs}/>
            //             <Route path='/cabinet/admin/view_groups' exact component = {ManageGroupps}/>
            //             <Route path='/cabinet/admin/play_roll' exact  component = {Payroll}/>
            //             <Route path='/cabinet/admin/register' exact  component = {Register}/>  
            //             <Route path='/cabinet/admin/new_project' exact  component = {NewProject}/>
            //             <Route path='/cabinet/admin/unit_projects' exact  component = {UnitProjects}/>   
            //             <Route path='/cabinet/admin/employees' exact  component = {Employees}/>  
            //             <Route path='/cabinet/admin/calendar' exact  component = {Interval}/> 
            //             <Route path='/cabinet/admin/system_time' exact  component = {SystemTime}/> 
            //             <Route path='/cabinet/admin/structure' exact  component = {Structure}/> 
            //         </Switch>
            //     </div>
            // </div>
        )
    }
}

export default Main;