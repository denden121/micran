import React from "react"
import {ArrowsAltOutlined} from '@ant-design/icons'
import {PartitionOutlined} from '@ant-design/icons'
import {BlockOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';
import {Select} from 'antd';
import "./Interval.css"
// import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Calendar from "../Calendar/Calendar";
class Interval extends React.Component {
    state ={
        range:'',
        departments:'',
        subdepartments:'',
        persons:'',
        show:false
    }
    onClickInterval=(e)=>{
        let a = e.target.id
        if(a ==='year' || a ==='month'){
            this.setState({range:a,
                                show:false})
        }
        // console.log(this.state)
    }
    componentDidMount() {
        this.loadDepartments()
    }
    loadDepartments=()=>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        fetch("http://127.0.0.1:8000/departments/simple/", requestOptions)
            .then(response =>  response.json())
            .then(result => {
                let actions = Array.from(result).map((department)=>{
                    // console.log(department)
                    return {value:`${department.pk}`,label:`${department.fields.code +' '+ department.fields.name}`}
                })
                this.setState({departments: actions})})
            .catch(error => console.log('error', error))
    }

    onChangeSelectDepartments=(e)=>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        fetch(`http://127.0.0.1:8000/departments/${e}/subdepartments/`, requestOptions)
            .then(response =>  response.json())
            .then(result => {
                console.log('sub',result)
                let subdepartments = Array.from(result).map((subdepartment)=>{
                    // console.log(subdepartment)
                    return {value:`${subdepartment.pk}`,label:`${subdepartment.code +' '+ subdepartment.name}`}
                })
                this.setState({subdepartments: subdepartments})})
            .catch(error => console.log('error', error))
    }
    onChangeSelectSubdepartment=(e)=>{
        let token = localStorage.getItem('token')
        let date = localStorage.getItem('date').split(' ')
        console.log('date',date)
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        console.log(date)
        const url = `http://127.0.0.1:8000/cabinet/calendar/?subdepartment=${e}&current_date=${date.join('-')}&range=${this.state.range}`
        fetch(url, requestOptions)
            .then(response =>  response.json())
            .then(result => {
                console.log('result',result)
                this.setState({persons:result,
                                    show:true})
            })
            .catch(error => console.log('error', error))
    }
    render(){
        const animatedComponents = makeAnimated();
        return(
            <div className="container-fluid">
                <div className="label row">
                    <label className="text-left col-md-12"><h4>График отпусков</h4>
                        <hr className="normal hr"/>
                    </label>                    
                </div>
                <div className="label row">
                    <label className="text-left col-md-12">Параметры отображения</label>                                         
                </div>                  
                <div className="row">
                    <div className="col-md-9 col-lg-9">                        
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static"> 
                                <div className="row">
                                    <div className="col-md-4">
                                        <ArrowsAltOutlined style={{float:"left", padding:"2px",color:"#3A4F84"}}/>
                                        <label className="LabelL"><h6>Интервал</h6></label>   
                                    </div>
                                    <div onClick={this.onClickInterval}  className="text-left col-md-8">
                                        <button  id = {'month'} className="btn btn-primary btn-sm"  style={{backgroundColor:"#7F98D8", borderColor:"#7F98D8"}}>Месяц</button>
                                        <button  id = {'year'} className="btn btn-primary btn-sm" style={{backgroundColor:"#7F98D8", borderColor:"#7F98D8", marginLeft:"5px"}}>Год</button>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-4">
                                        <PartitionOutlined style={{float:"left", padding:"2px",color:"#3A4F84", transform: 'rotate(90deg)'}}/>
                                        <label className="LabelL"><h6>Подразделение</h6></label>
                                    </div>
                                    <div className="col-md-8">
                                        <div style={{marginBottom:"7px"}}>
                                            <Select
                                            onChange={this.onChangeSelectDepartments}
                                            components={animatedComponents}
                                            options={this.state.departments}
                                            placeholder="Выбрать"
                                            style={{width:"100%"}}
                                            className="text-left"
                                            /> 
                                        </div>
                                        <div>
                                            <Select
                                            onChange={this.onChangeSelectSubdepartment}
                                            components={animatedComponents}
                                            options={this.state.subdepartments }
                                            placeholder="Выбрать" 
                                            style={{width:"100%"}}
                                            className="text-left"                                       
                                            /> 
                                        </div>                                    
                                    </div>                                    
                                </div> 
                                <br/>                    
                                <div className="row">
                                    <div className="col-md-4">
                                        <BlockOutlined style={{float:"left", padding:"2px",color:"#3A4F84"}}/>
                                        <label className="LabelL"><h6>Условные обозначения</h6></label>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="symbol1 rounded">12</div>
                                        <div className="lab">
                                            <label className="LabelL" >- Не определено (не влияет на норму часов)</label>
                                        </div>                                                                     
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-8" style={{marginTop:"-10px"}}>
                                        <div className="symbol2 rounded">12</div>
                                        <div className="lab">
                                            <label className="LabelL" >- Оплачиваемый отпуск</label>
                                        </div>                                                                     
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-8" style={{marginTop:"-5px"}}>
                                        <div className="symbol3 rounded">12</div>
                                        <div className="lab">
                                            <label className="LabelL" >- Отпуск без содержания</label>
                                        </div>                                                                     
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-8" style={{marginTop:"-5px"}}>
                                        <div className="symbol4 rounded">12</div>
                                        <div className="lab">
                                            <label className="LabelL" >- Больничный лист</label>
                                        </div>                                                                     
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-8" style={{marginTop:"-5px"}}>
                                        <div className="symbol5 rounded">12</div>
                                        <div className="lab">
                                            <label className="LabelL" >- Прогул</label>
                                        </div>                                                                     
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-8" style={{marginTop:"-5px"}}>
                                        <div className="symbol6 rounded">12</div>
                                        <div className="lab">
                                            <label className="LabelL" >- Планируемое событие(не влияет на норму часов)</label>
                                        </div>                                                                     
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-8" style={{marginTop:"-5px"}}>
                                        <div className="symbol7 rounded">12</div>
                                        <div className="lab">
                                            <label className="LabelL" >- Учебный отпуск</label>
                                        </div>                                                                     
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                    </div>
                                    <div className="col-md-8" style={{marginTop:"-5px"}}>
                                        <div className="symbol8 rounded">12</div>
                                        <div className="lab">
                                            <label className="LabelL" >- Планируемый ежегодный отпуск(не влияет на норму часов)</label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12">
                        {this.state.show ?
                            <Calendar date={this.state}/> :
                            ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Interval;