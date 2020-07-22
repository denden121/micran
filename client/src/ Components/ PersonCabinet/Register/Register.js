import React from "react"
import RegisterTable from "./RegisterTable/RegisterTable"


class Register extends React.Component{
    onClickNewProject = () =>{
        // <Redirect to = "/cabinet/admin/new_project"/> 
        document.location='/cabinet/admin/new_project'
    }
    onClickBack= () =>{
        document.location='/cabinet/admin/register'
    }
    onClickUnit= () =>{
        document.location='/cabinet/admin/unit_projects'
    }
    render(){
        return(
            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-left">Реестр проектов</h3>
                        <div className="buttons text-left">
                            <button type="button" className="btn btn-success btn-sm" onClick={this.onClickNewProject}>Добавить новый</button>
                            <button type="button" className="btn btn-danger btn-sm" onClick={this.onClickUnit}>Объединить</button>
                            <button type="button" className="btn btn-primary btn-sm" >Экспорт результатов</button>
                        </div>
                        <hr className="normal"/>
                        
                        <RegisterTable/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Register