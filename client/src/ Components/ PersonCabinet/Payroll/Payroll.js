import React from 'react'
import "./Payroll.css"
import PayrollCheck from "./PayrollCheck/PayrollCheck"
import Norma from "./Norma/Norma"
import TableZp from "./TableZp/TableZp"
import rend from "../../../index";


class Payroll extends React.Component{
    state = {
        allSalary:[],
        departments:[],
        subdepartments:[],
        hideSalary:false,
        hideNormTime:false,
        hideZeroReport:false,
        hideTechnician:false,
        hideAnotherPeople:false
    }
    componentDidMount() {
        this.loadAllSalary()
        this.loadDepartments()
    }
    loadNativeDepartment = () => {
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        fetch("http://127.0.0.1:8000/get_department/", requestOptions)
            .then(response =>  response.json())
            .then(result => {
                console.log(result)
                console.log('3333333333333333333333333333333333333333')
                this.state.selectDepartment = result
                console.log(this.state)
                // let temp = {department:{label:result.code+' '+result.name,value:result.pk}}
                // localStorage.setItem('payroll',JSON.stringify(temp))
            })
            .catch(error => console.log('error', error))
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
                    return {value:department.pk,label:`${department.fields.code +' '+ department.fields.name}`}
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
                    return {value:`${subdepartment.pk}`,label:`${subdepartment.fields.code +' '+ subdepartment.fields.name}`}
                })
                this.setState({subdepartments: subdepartments})})
            .catch(error => console.log('error', error))
        // fetch(`http://127.0.0.1:8000/departments/new`, requestOptions)
        //     .then(response =>  response.json())
        //     .then(result => {
        //         console.log('sub',result)
        //         let subdepartments = Array.from(result).map((subdepartment)=>{
        //             // console.log(subdepartment)
        //             return {value:`${subdepartment.pk}`,label:`${subdepartment.fields.code +' '+ subdepartment.fields.name}`}
        //         })
        //         this.setState({subdepartments: subdepartments})})
        //     .catch(error => console.log('error', error))
    }
    loadAllSalary = ()=>{
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
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => this.setState({allSalary:result[0].fields}))
            .catch(error => console.log('error', error));
    }
    onChangeSalary = (event) => {
        // console.log(event.target.type)
        if(event.target.type === 'number'){
            // console.log(event.target.id)
            let id= event.target.id.split('.')[0]
            let nameField = event.target.id.split('.')[1]

            if(nameField === 'plan_salary'){ // если изменять планую зп
                let plan_salary = event.target.value // значение плановой зп
                // console.log(plan_salary)
                let award = document.getElementById(`${id}.award`).value // значение премии
                // console.log(award)
                // задаем значение зп на руки
                document.getElementById(`${id}.salary_hand`).textContent = ((parseFloat(plan_salary) + parseFloat(award)) * 0.87).toFixed(2) // значение зарплаты на руки
                // задаем начислено
                document.getElementById(`${id}.salary`).textContent = (parseFloat(plan_salary) + parseFloat(award)).toFixed(2)
                const hours = document.getElementById(`${id}.norm-time`).textContent // норма часов
                // console.log(hours)
                //задаем стоимость часов
                document.getElementById(`${id}.cost`).textContent = ((parseFloat(plan_salary) + parseFloat(award)) / parseFloat(hours)).toFixed(2)
            }
            else if(nameField === 'award_interest'){
                // получаем значение процентов премии
                let award_interest =   document.getElementById(`${id}.award_interest`).value
                // console.log(award_interest)
                // задаем занчение премии в рубля
                document.getElementById(`${id}.award`).value = (award_interest / 100 * document.getElementById(`${id}.plan_salary`).value).toFixed(2)
                // получаем значение плановый зп и премии
                const plan_salary = document.getElementById(`${id}.plan_salary`).value
                const award = document.getElementById(`${id}.award`).value
                // console.log(award,plan_salary)
                //меняем значение зп на руки
                document.getElementById(`${id}.salary_hand`).textContent = ((parseFloat(plan_salary) + parseFloat(award)) * 0.87).toFixed(2)
                // меняем значение начисленно
                document.getElementById(`${id}.salary`).textContent = (parseFloat(plan_salary) + parseFloat(award)).toFixed(2)
                const hours = document.getElementById(`${id}.norm-time`).textContent // норма часов
                //задаем стоимость часов
                document.getElementById(`${id}.cost`).textContent = ((parseFloat(plan_salary) + parseFloat(award)) / parseFloat(hours)).toFixed(2)
            }
            else if(nameField === 'award'){
                const award = document.getElementById(`${id}.award`).value
                const plan_salary = document.getElementById(`${id}.plan_salary`).value
                document.getElementById(`${id}.award_interest`).value = ((100 * award) / plan_salary).toFixed(2)
                //меняем значение зп на руки
                document.getElementById(`${id}.salary_hand`).textContent = ((parseFloat(plan_salary) + parseFloat(award)) * 0.87).toFixed(2)
                // меняем значение начисленно
                document.getElementById(`${id}.salary`).textContent = (parseFloat(plan_salary) + parseFloat(award)).toFixed(2)
                const hours = document.getElementById(`${id}.norm-time`).textContent // норма часов
                //задаем стоимость часов
                document.getElementById(`${id}.cost`).textContent = ((parseFloat(plan_salary) + parseFloat(award)) / parseFloat(hours)).toFixed(2)
            }
        }
        else if(event.target.type === 'checkbox'){
            event.target.defaultChecked = event.target.defaultChecked ? '' : 'checked'
            const token = localStorage.getItem('token')
            let myHeaders = new Headers();
            myHeaders.append("Authorization", token);

            const date = localStorage.getItem('date').split(' ')
            let formdata = new FormData();
            const field = event.target.id.split('.')
            const id = field[1]
            const nameField = field[2]
            formdata.append('year', date[1])
            formdata.append('month', date[0])
            formdata.append('person', id)
            formdata.append('is_penalty', event.target.defaultChecked)

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
            const url = `http://127.0.0.1:8000/salary/`
            fetch(url, requestOptions)
                .then(response => this.setState({}))
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
    }
    onBlurNormDay = (event)=>{
        if(event.target.value!=event.target.defaultValue ){
            const token = localStorage.getItem('token')
            let myHeaders = new Headers();
            myHeaders.append("Authorization", token);

            const date = localStorage.getItem('date').split(' ')
            let formdata = new FormData();
            formdata.append("year", date[1]);
            formdata.append("month", date[0]);
            formdata.append("days_norm_common", event.target.value);

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
            const url = `http://127.0.0.1:8000/salary/change_common/`
            fetch(url, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            rend()
        }
    }
    onBlurSalary=(event)=>{
        const isSend = event.target.type !== 'checkbox' &
            event.target.value !== event.target.defaultValue
        if (isSend){
            const token = localStorage.getItem('token')
            let myHeaders = new Headers()
            myHeaders.append("Authorization", token)

            const date = localStorage.getItem('date').split(' ')
            let formdata = new FormData()

            let field = event.target.id.split('.')
            let id = field[0]
            let nameField = field[1]

            formdata.append("year", date[1])
            formdata.append("month", date[0])
            formdata.append("person", id)
            if (nameField === 'award_interest'){
                formdata.append('award', document.getElementById(`${id}.award`).value)
            }else{
                formdata.append(nameField, event.target.value)
            }


            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
            const url = `http://127.0.0.1:8000/salary/`
            fetch(url, requestOptions)
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
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h5 className="text-left">Расчет зарплат(оклад)</h5>
                        {/* <h6 className="text-left">Параметры отображения</h6> */}
                        <div className="text-left">Параметры отображения</div>
                        <br/>
                            <div className="row">
                                <div className="col-md-12 col-lg-12 card">
                                     <div className="card-body">
                                        <PayrollCheck
                                            selectDepartment={this.state.selectDepartment}
                                            departments = {this.state.departments}
                                            onChangeFilter={this.onChangeFilter}
                                            onChangeSelectDepartments ={this.onChangeSelectDepartments}/>
                                     </div>
                                 </div>
                            </div>
                        <br/>
                        {/*<div className="text-left">*/}
                        {/*     <button className="btn btn-sm btn-danger">Синхронизировать таблицы</button>*/}
                        {/* </div>*/}
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