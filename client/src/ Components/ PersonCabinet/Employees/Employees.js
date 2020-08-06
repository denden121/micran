import React from "react"
import ListEmp from "./ListEmp/ListEmp"
import "./ListEmp/CardModal/CardModal.css"
import CardModal from "./ListEmp/CardModal/CardModal"
import "./Employees.css"

class Employees extends React.Component{
    onClickPerson = ()=>{
        document.querySelector('.background-modal').style.display = 'flex'
        console.log('person',document.querySelector('.background-modal').style.display)
    }
    render(){
        return(
            <div className="container-fluid">
                <h4 className="text-left">Список сотрудников</h4>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        
                        <ListEmp onClickPerson={this.onClickPerson}/>
                    </div>
                </div>
                <div className="background-modal">
                    <div className="modal">
                        <CardModal/>
                    </div>
                </div>
                <div className="background-modal">
                    
                        <CardModal/>
                    
                </div>
            </div>
        )
    }
}

export default Employees