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
                    
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-3 d-flex flex-column position-static">
                            <h4 align="center">Личные данные</h4> 
                            <br/> 
                                <div className="col-md-8 order-md-1">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            {/* <label for="firstName">Имя</label> */}
                                            <h6 align="left">Имя</h6>
                                            <div className="form-control" id="firstName">
                                                {this.state.cabinet.first_name}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            {/* <label for="lastName">Фамилия</label> */}
                                            <h6 align="left">Фамилия</h6>
                                            <div className="form-control" id="lastName">
                                                {this.state.cabinet.last_name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        {/* <label for="middleName">Отчество</label> */}
                                        <h6 align="left">Отчество</h6>
                                        <div className="form-control" id="middleName">
                                            {this.state.cabinet.middle_name}
                                        </div>  
                                        {/* <br/>                                      */}
                                    </div>  
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            {/* <label for="birth">Дата рождения</label> */}
                                            <h6 align="left">Дата рождения</h6>
                                            <div className="form-control" id="birth">                                                
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            {/* <label for="sex">Пол</label> */}
                                            <h6 align="left">Пол</h6>
                                            <div className="form-control" id="sex">                                                
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            {/* <label for="stazh">Стаж</label> */}
                                            <h6 align="left">Стаж</h6>
                                            <div className="form-control" id="stazh">                                                
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            {/* <label for="smena">Смена</label> */}
                                            <h6 align="left">Смена</h6>
                                            <div className="form-control" id="stazh">                                                
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="mb-3">
                                        {/* <label for="datework">Дата трудоустройства</label> */}
                                        <h6 align="left">Дата трудоустройства</h6>
                                        <div className="form-control" id="datework">                                            
                                        </div>  
                                    </div> 
                                    <div className="mb-3">
                                        {/* <label for="latetime">Допустимое время опозданий</label> */}
                                        <h6 align="left">Допустимое время опозданий</h6>
                                        <div className="form-control" id="latetime">                                            
                                        </div>  
                                    </div>  
                                    <div className="mb-3">
                                        {/* <label for="part">Совместительство</label> */}
                                        <h6 align="left">Совместительство</h6>
                                        <div className="form-control" id="part">                                            
                                        </div>  
                                    </div> 
                                    <div className="mb-3">
                                        {/* <label for="groupin">Входит в группы</label> */}
                                        <h6 align="left">Входит в группы</h6>
                                        <div className="form-control" id="groupin">                                            
                                        </div>  
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