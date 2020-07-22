import React from 'react'
import "./Payroll.css"
import PayrollCheck from "./PayrollCheck/PayrollCheck"
import Norma from "./Norma/Norma"
import TableZp from "./TableZp/TableZp"



class Payroll extends React.Component{
    state = {
        allSalary:{}
    }
    componentDidMount() {
        this.loadAllSalary()
    }
    loadAllSalary = async ()=>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", token);
        let requestOptions = {
            method: 'GET',
            headers: myHeaders, 
            redirect: 'follow'
        };
        const date = localStorage.getItem('date').split(' ')
        const url = `http://127.0.0.1:8000/salary/?month=${date[0]}&year=${date[1]}`
        await fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => this.setState({allSalary:result[0].fields}))
            .catch(error => console.log('error', error));
        console.log(this.state.allSalary)
    }
    onBlurNormDay = (event)=>{
        console.log('value',event.target.value)
        console.log('default',event.target.defaultValue)
        console.log('class',event.target.className)
    }
    onBlurNormHours=(event)=>{
        console.log('value',event.target.value)
        console.log('default',event.target.defaultValue)
        console.log('class',event.target.className)
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-left">Расчет зарплат(оклад)</h3>
                        <h5 className="text-left">Параметры отображения</h5>
                            <div className="row">
                                <div className="col-md-12 card">
                                     <div className="card-body">
                                        <PayrollCheck/>                            
                                     </div>
                                 </div>
                            </div>
                        <br/>
                        <div className="text-left">
                             <button className="btn btn-sm btn-danger">Синхронизировать таблицы</button>
                         </div>
                         <br/>
                         <Norma
                             normDays = {this.state.allSalary.days_norm}
                             normTime = {this.state.allSalary.time_norm}
                             onBlurNormDay = {this.onBlurNormDay}
                             onBlurNormHours = {this.onBlurNormHours}
                         />
                         <br/>
                         <TableZp
                             allSalary = {this.state.allSalary.persons}
                             onBlurNormDay = {this.onBlurNormDay}
                         />
                    </div>
                </div>                                
            </div>
        )
    }
}

export default Payroll