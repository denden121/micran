import React from "react"
import NewProject from "./NewProject/NewProject"
import RegisterTable from "./RegisterTable/RegisterTable"

class Register extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-left">Реестр проектов</h3>
                        <div className="buttons text-left">
                            <button type="button" className="btn btn-success btn-sm" >Добавить новый</button>
                            <button type="button" className="btn btn-danger btn-sm" >Объединить</button>
                            <button type="button" className="btn btn-primary btn-sm" >Экспорт результатов</button>
                        </div>
                        <hr className="normal"/>
                        <h5 className="text-left">Список проектов</h5>
                        <RegisterTable/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Register