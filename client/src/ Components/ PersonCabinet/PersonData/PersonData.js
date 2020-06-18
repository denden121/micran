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
                    <div className="col-md-4 order-md-4">
                        <h4 className="mb-4">Личные данные</h4>
                            <div className="row">
                                <label for="Name">Имя</label>
                                <div type="text" className="form-control">
                                    {this.state.cabinet.first_name}
                                </div>

                                <label for="Name">Фамилия</label>
                                <div type="text" className="form-control">
                                    {this.state.cabinet.last_name}
                                </div>

                                <label for="Name">Отчество</label>
                                <div type="text" className="form-control">
                                    {this.state.cabinet.middle_name}
                                </div>
                            </div>
                            
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonData