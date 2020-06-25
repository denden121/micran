import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./PersonData.css"

class PersonData extends Component{
    state = {
        cabinet:''
    }
    componentDidMount() {
        let myHeaders = new Headers();
        let token = localStorage.getItem('token')
        myHeaders.append("Authorization", token);
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/cabinet/", requestOptions)
            .then(response => response.json())
            .then(result => this.setState({cabinet:result[0].fields}))
            .catch(error => console.log('error', error));
        console.log(this.state)
    }
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
                                <div  className="form-control" id="firstName">
                                    {this.state.cabinet.first_name}
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="firstName">Фамилия</label>
                                <div  className="form-control" id="firstName">
                                    {this.state.cabinet.last_name}
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="firstName">Отчество</label>
                                <div  className="form-control" id="firstName">
                                    {this.state.cabinet.middle_name}
                                </div>
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