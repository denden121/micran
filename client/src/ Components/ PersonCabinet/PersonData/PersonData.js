import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonData extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 order-md-4">
                        <h4 className="mb-4">Личные данные</h4>
                            <div className="row">
                                
                                <label for="Name">Имя</label>
                                <input type="text" className="form-control"></input>

                                <label for="Name">Фамилия</label>
                                <input type="text" className="form-control"></input>

                                <label for="Name">Отчество</label>
                                <input type="text" className="form-control"></input>
                            </div>
                            
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonData