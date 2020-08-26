import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../Navigation/Navigation";
// import Header from "../Header/Header"
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
import { Layout, Menu, PageHeader,Button, DatePicker} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    
  } from '@ant-design/icons';
import Calendar from "../Navigation/Calendar/Calendar"


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
      
        if(!localStorage.getItem('date')){
            let date = new Date()
            localStorage.setItem('date',`${date.getMonth()+1} ${date.getFullYear()} `)
        }

        function onChange(month, dateString) {
          console.log(month, dateString);
        }
        return (
            <Layout style={{ minHeight: '100vh', paddingTop:0,margin:0 }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logotip" 
                    style={{
                        width:"120px",
                        height:"31px",
                        float:"Left"
                    }}>Микран</div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                      
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Option 2
                    </Menu.Item>
                      <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                      {/* <Calendar/> */}
                      </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />} />
                </Menu>
                </Sider>
        <Layout className="site-layout">
          <Header>
            <div className="text-right">
              <Button size="small">Выйти</Button>
            </div>
          </Header>
          <Content >
            <div className="Data" style={{backgroundColor:"white",paddingTop:"20px"}}>
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