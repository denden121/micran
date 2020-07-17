import React from "react"
import "./NewProject.css"

const NewProject =(props)=>{
    return(
            <div className="container-fluid">
                
                    <div className="row">
                    <div className="col-md-2 text-right">
                        <div className="naprav">
                            <div>Направление</div>
                        </div>     
                    </div>
                    <div className="col-md-8">
                        <div className="naprav">           
                            <select className="form-control">                                                                                                           
                            </select>                         
                            </div>
                    </div>
                    </div>
                   
                
            </div>
    )
    
}

export default NewProject