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
                <div className="row mb-2">
                    <div className="col-md-8">
                    <h4 className="col-md-5">Личные данные</h4>
                    <br/>
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-3 d-flex flex-column position-static">
                                <div className="col-md-8 order-md-1">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label for="firstName">Имя</label>
                                            <div className="form-control" id="firstName">
                                                {this.state.cabinet.first_name}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label for="lastName">Фамилия</label>
                                            <div className="form-control" id="lastName">
                                                {this.state.cabinet.last_name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="middleName">Отчество</label>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default PersonData