import React from "react"
import "./NewProject.css"

const NewProject =(props)=>{
   return(
       <div className="container-fluid">
           <div className="row">
               <div className="col-md-12">
                   <h3 className="text-left">Новый проект</h3>
                   <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                   <div className="col p-4 d-flex flex-column position-static">
                       <div className="block1">
                            <div className="input-group mb-3 input-group-sm">
                                    <label className="napr col-sm-2 text-left" style={{fontSize:"16px"}}>Направления</label>
                                    <select className="custom-select">
                                        <option selected>Выбрать</option>
                                    </select>                        
                            </div>
                            <br/>
                            <div className="input-group mb-3 input-group-sm">
                                    <label className="napr col-sm-2 text-left" style={{fontSize:"16px"}}>Новый проект</label>
                                    <textarea 
                                    className="form-control" 
                                    rows="2"
                                    placeholder="Новый проект">
                                    </textarea>                      
                            </div>
                            <hr className="normal"/>   
                       </div> 
                       <div className="block2">
                            <div className="input-group mb-3 input-group-sm">
                                <label className="napr col-sm-2 text-left" style={{fontSize:"16px"}}>Руководитель</label>
                                <select className="custom-select">
                                    <option selected>Выбрать</option>
                                </select>                        
                            </div>
                            <div className="input-group mb-3 input-group-sm">
                                <label className="napr col-sm-2 text-left" style={{fontSize:"16px"}}>Главный конструктор</label>
                                <select className="custom-select">
                                    <option selected>Выбрать</option>
                                </select>                        
                            </div>
                            <div className="input-group mb-3 input-group-sm">
                                <label className="napr col-sm-2 text-left" style={{fontSize:"16px"}}>Зам.главного конструктора</label>
                                <select className="custom-select">
                                    <option selected>Выбрать</option>
                                </select>                        
                            </div>
                            <hr className="normal"/> 
                        </div>  
                        <div className="block3">
                            <div className="input-group mb-3 input-group-sm">
                                 <label className="napr col-sm-2 text-left" style={{fontSize:"16px"}}>№ договора</label>
                                <textarea 
                                    className="form-control" 
                                    rows="2"
                                        placeholder="№ договора">
                                </textarea>                      
                            </div>
                            <div className="input-group mb-3 input-group-sm">
                                    <label className="napr col-sm-2 text-left" style={{fontSize:"16px"}}>Заказчик</label>
                                    <textarea 
                                    className="form-control" 
                                    rows="2"
                                    placeholder="Заказчик">
                                    </textarea>                      
                            </div>  
                            <div className="input-group mb-3 input-group-sm">
                                    <label className="napr col-sm-2 text-left" style={{fontSize:"16px"}}>Заказ на производство</label>
                                    <textarea 
                                    className="form-control" 
                                    rows="2"
                                    placeholder="Заказ на производство">
                                    </textarea>                      
                            </div>
                            <div className="input-group mb-3 input-group-sm">
                                    <label className="napr col-sm-2 text-left" style={{fontSize:"16px"}}>Комментарий для сотрудников</label>
                                    <textarea 
                                    className="form-control" 
                                    rows="2"
                                    placeholder="Описание">
                                    </textarea>                      
                            </div>  
                            <div className="input-group mb-3 input-group-sm">
                            <label className="napr col-sm-2 text-left" style={{fontSize:"16px"}}>Тип</label>
                                <div className="checkbox checkbox-inline " >
                                    <input type="form-check-input text-success "  type="checkbox" className="styled"/>
                                        <label for="inlineCheckbox1" style={{border: "3px solid grey", background:"grey", color:"white", borderRadius:"7px", fontSize:"12px", marginLeft:"5px"}}> Внутр</label>
                                </div>
                                <div className="checkbox checkbox-inline " >
                                    <input type="form-check-input text-success "  type="checkbox" className="styled" style={{marginLeft:"5px"}}/>
                                        <label for="inlineCheckbox1" style={{border: "3px solid #FF7A36", background:"#FF7A36", color:"white", borderRadius:"7px", fontSize:"12px", marginLeft:"5px"}}>Внеш</label>
                                </div>
                            </div>
                            <div className="input-group mb-3 input-group-sm">
                            <label className="napr col-sm-2 text-left" style={{fontSize:"16px"}}>Состояние</label>
                                <div className="checkbox checkbox-inline " >
                                    <input type="form-check-input text-success "  type="checkbox" className="styled"/>
                                        <label for="inlineCheckbox1" style={{border: "3px solid #6FD76F", background:"#6FD76F", color:"white", borderRadius:"7px", fontSize:"12px", marginLeft:"5px"}}>Открыт</label>
                                </div>
                                <div className="checkbox checkbox-inline " >
                                    <input type="form-check-input text-success "  type="checkbox" className="styled" style={{marginLeft:"5px"}}/>
                                        <label for="inlineCheckbox1" style={{border: "3px solid #E23C3C", background:"#E23C3C", color:"white", borderRadius:"7px", fontSize:"12px", marginLeft:"5px"}}>Закрыт</label>
                                </div>
                            </div>
                            <div className="input-group mb-3 input-group-sm">
                            <label className="napr col-sm-2 text-left" style={{fontSize:"16px"}}>Доступность для отчетов сотрудников</label>
                                <div className="checkbox checkbox-inline " >
                                    <input type="form-check-input text-success "  type="checkbox" className="styled"/>
                                        <label for="inlineCheckbox1" style={{border: "3px solid #6FD76F", background:"#6FD76F", color:"white", borderRadius:"7px", fontSize:"12px", marginLeft:"5px"}}>Досупен</label>
                                </div>
                                <div className="checkbox checkbox-inline " >
                                    <input type="form-check-input text-success "  type="checkbox" className="styled" style={{marginLeft:"5px"}}/>
                                        <label for="inlineCheckbox1" style={{border: "3px solid #E23C3C", background:"#E23C3C", color:"white", borderRadius:"7px", fontSize:"12px", marginLeft:"5px"}}>Недоступен</label>
                                </div>
                            </div>
                            <div className="input-group mb-3 input-group-sm">
                            <label className="napr col-sm-2 text-left" style={{fontSize:"16px"}}>Приемка ВП</label>
                                <div className="checkbox checkbox-inline " >
                                    <input type="form-check-input text-success "  type="checkbox" className="styled"/>
                                        <label for="inlineCheckbox1" style={{border: "3px solid #454545", background:"#454545", color:"white", borderRadius:"7px", fontSize:"12px", marginLeft:"5px"}}>ПП</label>
                                </div>
                            </div>
                            <hr className="normal"/> 
                        </div> 
                        <div className="block4 text-right" >
                            <button type="button" className="btn btn-success btn-sm" >Сохранить</button>
                            <button type="button" className="btn btn-secondary btn-sm" style={{marginLeft:"5px"}}>Отмена</button>
                        </div>     
                                  
                    </div>                        
                   </div>
               </div>
           </div>
       </div>
   )
}

export default NewProject