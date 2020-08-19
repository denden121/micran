import React from "react"
import {FieldTimeOutlined} from '@ant-design/icons'
import { Checkbox } from 'antd';
import {Select} from "antd";
import CollapseParametr from "./CollapseParametr/CollapseParametr"
import { Collapse } from 'antd';
import { Button } from 'antd';
import TimeTable from "./TimeTable/TimeTable"
import TableTime from "./TableTime/TableTime"
class SystemTime extends React.Component{
    state={
        departments:[],
        users:[],
    }
    loadSubdepartment=()=>{
        const token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/departments/simple/", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                let departments = Array.from(result)
                departments =  departments.map((department,index)=>{
                    const name = department.fields.code + ' ' + department.fields.name
                    const pk = department.pk
                    return (
                        {value:pk,label:name}
                    )
                })
                console.log(departments)
                this.setState({departments:departments})
            })
            .catch(error => console.log('error', error));

    }
    onChangeDepartments=(e)=>{
        console.log(e)
        const token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/departments/simple/", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                let departments = Array.from(result)
                departments =  departments.map((department,index)=>{
                    const name = department.fields.code + ' ' + department.fields.name
                    const pk = department.pk
                    return (
                        {value:pk,label:name}
                    )
                })
                console.log(departments)
                this.setState({departments:departments})
            })
            .catch(error => console.log('error', error));
    }
    componentDidMount() {
        this.loadSubdepartment()
    }
    render(){
        const { Panel } = Collapse;
        function callback(key) {
            console.log(key);
          }
        return(
            <div className="container-fluid">
                <div className="label row">                
                    <label className="text-left col-md-12">
                        <FieldTimeOutlined style={{float:"left",fontSize:"23px",padding:"2px"}}/>
                        <h4>Система учета времени</h4>
                        <hr className="normal hr"/>
                    </label>                    
                </div>
                <div className="row text-left">
                    <div className="col-md-12">
                    <Collapse accordion defaultActiveKey={['1']} onChange={callback}>
                    <Panel header="Параметры отображения" key="1">
                        <CollapseParametr Departments = {this.state.departments}
                                          onChangeDepartments={this.onChangeDepartments}/>
                    </Panel>
                    </Collapse>                    
                    </div>  
                    <br/>
                    <br/>
                    {/* <label className="text-left col-md-12" style={{marginTop:"-15px"}}>Параметры отображения</label>                                          */}
                </div> 
                <br/>
                <br/>
                <TableTime/> 
                
            </div>
        )
    }
}

export default SystemTime