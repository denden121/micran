import React from "react"
import "./CardModal.css"
import picture from "./avatar.png"

const CardModal =(props)=>{
    return(
            
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4>Карточка сотрудника</h4>
                        <a href="#close" title="Close" class="close">×</a>
                    </div>
                    <div className="modal-body">
                       <div className="container-fluid">
                       <div class="row mb-2">
                            <div class="col-md-5">
                                <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div class="col p-4 d-flex flex-column position-static">
                                        <img src={picture} alt="" className="img-fluid"></img>
                                        <label className="text-left">Осеева Анастасия Михайловна</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div class="col p-4 d-flex flex-column position-static">         
                                        <div className="row">
                                            
                                            <div className="col-md-7">
                                                <label className="Label2"><b>Пол</b></label>
                                            </div>
                                            <div className="col-md-5">
                                                <label className="text-left">Женский</label>
                                            </div>
                                            <div className="col-md-7">
                                                <label className="Label2"><b>Дата рождения</b></label>
                                            </div>
                                            <div className="col-md-5">
                                                <label className="text-left">06.06.1998</label>                                                
                                            </div>
                                            <div className="col-md-12"><hr className="normal"/></div>
                                            <div className="col-md-7">
                                                <label className="Label2"><b>Дата</b></label>
                                                <label className="Label2"><b>трудоустройства</b></label>
                                            </div>
                                            <div className="col-md-5">
                                                <label className="text-left">06.06.1998</label>                                                
                                            </div>
                                            <div className="col-md-7">
                                                <label className="Label2"><b>Стаж</b></label>
                                            </div>
                                            <div className="col-md-5">
                                                <label className="LabelL">5</label>                                                
                                            </div>
                                            
                                        </div>
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

export default CardModal