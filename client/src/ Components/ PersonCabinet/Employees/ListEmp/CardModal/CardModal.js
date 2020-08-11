import React from "react"
import "./CardModal.css"
// import "./avatar.png"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Radio } from 'antd';




const CardModal =(props)=>{
    return(
            <div className="container-fluid">
                <div class="row mb-2">
                    <div class="col-md-5">
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                {/* <img src={picture} alt="" className="img-fluid"></img> */}
                                <Avatar shape="square" className="img-fluid" size={128} icon={<UserOutlined />} />
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
                                    <div className="col-md-7 text-right">
                                        <label className="Label2"><b>Дата рождения</b></label>
                                    </div>
                                    <div className="col-md-5">
                                        <label className="text-left">06.06.1998</label>                                                
                                    </div>
                                    <div className="col-md-12"><hr className="normal"/></div>
                                        <div className="col-md-7">
                                            <label className="Label2"><b>Дата трудоустройства</b></label>
                                            {/* <label className="Label2" ><b>трудоустройства</b></label> */}
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
                                        <div className="col-md-7">
                                            <label className="Label2"><b>Допустимое время</b></label>
                                            <label className="Label2" style={{marginTop:"-10px"}}><b>опоздания</b></label>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-control form-control-sm"/>                                                 
                                        </div>
                                        <div className="col-md-7">
                                            <label className="Label2"><b>Смена</b></label>
                                        </div>
                                        <div className="col-md-5">
                                            <Radio.Group onChange={props.onChangeRadio}>
                                                <Radio  value={1}>A</Radio>
                                                <Radio  value={2}>B</Radio>        
                                            </Radio.Group>                                                 
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