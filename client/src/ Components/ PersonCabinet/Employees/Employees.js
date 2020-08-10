import React from "react"
import ListEmp from "./ListEmp/ListEmp"
import "./ListEmp/CardModal/CardModal.css"
import CardModal from "./ListEmp/CardModal/CardModal"
import "./Employees.css"

class Employees extends React.Component{
    state = {
        workers:{}
    }
    onClickPerson = ()=>{
        document.querySelector('.background-modal').style.display = 'flex'
        console.log('person',document.querySelector('.background-modal').style.display)
    }
    loadWorkers = async () =>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        const url = `http://127.0.0.1:8000/workers/all/`
        await fetch(url, requestOptions)
            .then(response =>  response.json())
            .then(result => this.setState({workers: result}))
            .catch(error => console.log('error', error))
        console.log('state',this.state.workers)

    }
    componentDidMount() {
        this.loadWorkers()
    }

    render(){
        return(
            <div className="container-fluid">
                <h4 className="text-left">Список сотрудников</h4>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        
                        <ListEmp workers={this.state.workers} onClickPerson={this.onClickPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Employees