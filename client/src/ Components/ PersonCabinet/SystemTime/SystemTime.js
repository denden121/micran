import React from "react"
import {FieldTimeOutlined} from '@ant-design/icons'
import { Checkbox } from 'antd';
import CollapseParametr from "./CollapseParametr/CollapseParametr"
import { Collapse } from 'antd';
import { Button } from 'antd';
import TableTime from "./TableTime/TableTime"
class SystemTime extends React.Component{
    state={
        departments:[],
        workers:[],
        users:[],
        date:'',
        worker:''
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
        const token = localStorage.getItem('token')

        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`http://127.0.0.1:8000/workers/departments/${e}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                let workers = Array.from(result)
                workers =  workers.map((worker,index)=>{
                    const name = worker.name
                    const pk =  worker.pk
                    return (
                        {value:pk,label:name}
                    )
                })
                this.setState({workers:workers})
            })
            .catch(error => console.log('error', error));
    }
    componentDidMount() {
        this.loadSubdepartment()
    }
    onChangeWokers=(e)=>{
        console.log(e)
        this.setState({worker:e})
    }
    onChangeDate=(e)=>{
        const months = {
            "Jan" : 1,
            "Feb" : 2,
            "Mar" : 3,
            "Apr" : 4,
            "May" : 5,
            "Jun" : 6,
            "Jul" : 7,
            "Aug" : 8,
            "Sep" : 9,
            "Oct" : 10,
            "Nov" : 11,
            "Dec" : 12,
        }
        const date = String(e._d).split(' ')
        const month = months[date[1]]
        const day = date[2]
        const year = date[3]
        this.setState({date:`${year}-${month}-${day}`})
    }
    onClickButtomGetTime =()=>{
        console.log(this.state)
        const token = localStorage.getItem('token')

        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`http://127.0.0.1:8000/cabinet/time_card/?date=${this.state.date}&user_id=${this.state.worker}`, requestOptions)
            .then(response => response.json())
            .then(result =>{

                result = Array.from(result)
                let a = result.pop()
                for(let i =0;i<20;i++){
                    result.push(a)
                }
                this.setState({users:result})})
            .catch(error => console.log('error', error));
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
                                          Workers = {this.state.workers}
                                          onChangeWokers = {this.onChangeWokers}
                                          onChangeDepartments={this.onChangeDepartments}
                                          onChangeDate={this.onChangeDate}
                                          onClickButtomGetTime={this.onClickButtomGetTime}
                        />
                    </Panel>
                    </Collapse>                    
                    </div>  
                    <br/>
                    <br/>
                    {/* <label className="text-left col-md-12" style={{marginTop:"-15px"}}>Параметры отображения</label>                                          */}
                </div> 
                <br/>
                <br/>
                <TableTime Date = {this.state.users}/>
                
            </div>
        )
    }
}

export default SystemTime