import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./PersonData.css"

class PersonData extends Component{
    render(){
        return(
            <div className="container-fluid">
                
                <div className="row">
                <div className="col-2"></div>
                    <div className="col-6">
                         <h4>Личные данные</h4>
                            <div className="row">
                                
                                <div className="col-6">
                                    <label for="firstName">Имя</label>
                                    <input type="text" class="form-control" id="firstName"></input>
                                </div>
                                

                                <div className="col-6">
                                    <label for="lastName">Фамилия</label>
                                    <input type="text" class="form-control" id="firstName"></input>
                                </div>
                                

                            </div>
                            <div className="col"></div>
                     </div>

                </div>    
                </div>
            
            
        )
    }
}

export default PersonData