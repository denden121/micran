import React from 'react'
import "./Payroll.css"
import PayrollCheck from "./PayrollCheck/PayrollCheck"
import Norma from "./Norma/Norma"
import TableZp from "./TableZp/TableZp"



class Payroll extends React.Component{
    state = {
        allSalary:{},
        filtersSalary:{},
        hideSalary:false,
        hideNormTime:false,
        hideZeroReport:false,
        hideTechnician:false,
        hideAnotherPeople:false
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
    onChangeSalary=(event)=>{
        console.log(event.target.value)
        console.log(event.target.placeholder)
        // console.log(event.target)
    }
    onBlurNormDay =async (event)=>{
        console.log('value',event.target.value)
        console.log('default',event.target.defaultValue)
        console.log('class',event.target.className)
        if(event.target.value!=event.target.defaultValue){
            const token = localStorage.getItem('token')
            var myHeaders = new Headers();
            myHeaders.append("Authorization", token);

            const date = localStorage.getItem('date').split(' ')
            var formdata = new FormData();
            formdata.append("year", date[1]);
            formdata.append("month", date[0]);
            formdata.append("days_norm_common", event.target.value);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
            const url = `http://127.0.0.1:8000/salary/change_common/`
            await fetch(url, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
    }
    onBlurNormHours=(event)=>{
        console.log('value',event.target.value)
        console.log('default',event.target.defaultValue)
        console.log('class',event.target.className)
    }
    onBlurSalary= async (event)=>{
        if (event.target.value !== event.target.defaultValue){
            const token = localStorage.getItem('token')
            let myHeaders = new Headers();
            myHeaders.append("Authorization", token);
            const date = localStorage.getItem('date').split(' ')
            let formdata = new FormData();
            let field = event.target.id.split('.')
            console.log('filed',field)
            let id = field[0]
            let nameField = field[1]
            console.log(id , nameField)
            formdata.append("year", date[1]);
            formdata.append("month", date[0]);
            formdata.append("person", id);
            formdata.append(nameField, event.target.value);

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
            const url = `http://127.0.0.1:8000/salary/`
            await fetch(url, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
    }
    onChangeFilter=(event)=>{
        switch (event.target.value){
            case 'hide-salary':
                if (this.state.hideSalary){
                    this.setState({hideSalary:false})
                }
                else{
                    this.setState({hideSalary:true})
                }
                break;
            case 'hide-norm-time':
                if (this.state.hideNormTime){
                    this.setState({hideNormTime:false})
                    let temp = this.state.allSalary
                }
                else{
                    this.setState({hideNormTime:true})
                }
                break;
            case 'hide-zero-report':
                if (this.state.hideZeroReport){
                    this.setState({hideZeroReport:false})
                }
                else{
                    this.setState({hideZeroReport:true})
                }
                break;
            case 'hide-technician':
                if (this.state.hideTechnician){
                    this.setState({hideTechnician:false})
                }
                else{
                    this.setState({hideTechnician:true})
                }
                break;
            case 'hide-another-people':
                if (this.state.hideAnotherPeople){
                    this.setState({hideAnotherPeople:false})
                }
                else{
                    this.setState({hideAnotherPeople:true})
                }
                break;
        }
    }
    render(){
        console.log('dfsf',this.state)
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <h3 className="text-left">Расчет зарплат(оклад)</h3>
                        <h5 className="text-left">Параметры отображения</h5>
                            <div className="row">
                                <div className="col-md-12 col-lg-12 card">
                                     <div className="card-body">
                                        <PayrollCheck onChangeFilter={this.onChangeFilter}/>
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
                             onChangeSalary={this.onChangeSalary}
                             Filter = {this.state}
                             allSalary = {this.state.allSalary.persons}
                             onBlurSalary = {this.onBlurSalary}
                         />
                    </div>
                </div>                                
            </div>
        )
    }
}

export default Payroll