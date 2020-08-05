import React from "react"
import ListEmp from "./ListEmp/ListEmp"

class Employees extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <h4 className="text-left">Список сотрудников</h4>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        
                        <ListEmp/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Employees