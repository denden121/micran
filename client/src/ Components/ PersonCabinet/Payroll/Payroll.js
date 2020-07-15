import React from 'react'
import "./Payroll.css"
import PayrollCheck from "./PayrollCheck/PayrollCheck"



class Payroll extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <h3 className="text-left">Расчет зарплат(оклад)</h3>
                <h5 className="text-left">Параметры отображения</h5>
                <div className="row">
                    <div className="col-md-12 card">
                        <div className="card-body">
                            <PayrollCheck/>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Payroll