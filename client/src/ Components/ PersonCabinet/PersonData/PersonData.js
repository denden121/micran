import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./PersonData.css"

class PersonData extends Component{
    render(){
        return(
            <div className="container-fluid">
               
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-6 order-md-1">

                                <h4 className="col-md-5 mb-2">Личные данные</h4>
                                    <div className="row">
                                        <div className="col-md-12 mb-3">
                                        <label className="col-md-6" for="firstName">Имя</label>
                                        <div  className="form-control" id="firstName"/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                        <label for="firstName">Фамилия</label>
                                        <div  className="form-control" id="firstName"/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                        <label for="firstName">Отчество</label>
                                        <div  className="form-control" id="firstName"/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                        <label for="firstName">Дата рождения</label>
                                        <div  className="form-control" id="firstName"/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                        <label for="firstName">Пол</label>
                                        <div  className="form-control" id="firstName"/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                        <label for="firstName">Стаж</label>
                                        <div  className="form-control" id="firstName"/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                        <label for="firstName">Смена</label>
                                        <div  className="form-control" id="firstName"/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                        <label for="firstName">Дата трудоустройства</label>
                                        <div  className="form-control" id="firstName"/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                        <label for="firstName">Допустимое время опоздания</label>
                                        <div  className="form-control" id="firstName"/>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                        <label className="col-md-6" for="firstName">Совместительство</label>
                                        <div  className="form-control" id="firstName"/>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                        <label className="col-md-6" for="firstName">Входит в группы</label>
                                        <div  className="form-control" id="firstName"/>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                </div>
                
            
        )
    }
}

export default PersonData