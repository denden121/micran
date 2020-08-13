import React from "react"
import "./CardModal.css"
// import "./avatar.png"
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import { Radio } from 'antd';




const CardModal =(props)=>{
    const worker = props.Workers.workers[props.Workers.select_worker_index]
    const fullName = worker.person.full_name
    const sex = worker.person.sex
    const date = worker.person.date
    const birthDate = worker.person.birth_date
    const groups = worker.person.groups.join(' ')
    const subdivisionAndPosition = worker.person.subdivision +' '+ worker.person.position
    console.log(worker)
    return(
            <div className="container-fluid">
                <div class="row mb-2">
                    <div class="col-md-4">
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                {/* <img src={picture} alt="" className="img-fluid"></img> */}
                                <Avatar shape="square" className="img-fluid" size={128} icon={<UserOutlined />} />
                                <label className="text-left">{fullName}</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">         
                                <div className="row">                                            
                                    <div className="col-md-7">
                                        <label className="Label2"><b>Пол</b></label>
                                    </div>
                                    <div className="col-md-5">
                                        <label className="text-left">{sex}</label>
                                    </div>
                                    <div className="col-md-7 text-right">
                                        <label className="Label2"><b>Дата рождения</b></label>
                                    </div>
                                    <div className="col-md-5">
                                        <label className="text-left">{birthDate}</label>
                                    </div>
                                    <div className="col-md-12"><hr className="normal"/></div>
                                        <div className="col-md-7">
                                            <label className="Label2"><b>Дата трудоустройства</b></label>
                                            {/* <label className="Label2" ><b>трудоустройства</b></label> */}
                                        </div>
                                        <div className="col-md-5">
                                            <label className="text-left">{date}</label>
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
                                                <Radio  value={1}>дневная</Radio><br/>
                                                <Radio  value={2}>ночная</Radio>        
                                            </Radio.Group>                                              
                                        </div>                                        
                                        <div className="col-md-7">
                                            <label className="Label2" style={{marginTop:"10px"}}><b>Совместительство</b></label>
                                        </div>
                                        <div className="col-md-5">                                              
                                            <Checkbox style={{marginTop:"10px"}}>НИИ СЭС</Checkbox>                                            
                                        </div>   
                                        <div className="col-md-7">
                                                <label className="Label2" style={{marginTop:"10px"}}><b>Окладная СОТ</b></label>
                                        </div>
                                        <div className="col-md-5">                                              
                                            <Checkbox style={{marginTop:"10px"}}>использовать</Checkbox>                                            
                                        </div>   
                                        <div className="col-md-12"><hr className="normal"/></div>      
                                        <div className="col-md-7">
                                            <label className="Label2" ><b>Входит в группы</b></label>
                                        </div>     
                                        <div className="col-md-5">
                                            <div>{groups}</div>
                                        </div> 
                                        <div className="col-md-7">
                                            <label className="Label2" ><b>Подразделение, должность</b></label>
                                        </div>     
                                        <div className="col-md-5">
                                            <div>{subdivisionAndPosition}</div>
                                        </div> 
                                        <div className="col-md-7">
                                            <label className="Label2" ><b>История трудоустройства</b></label>
                                        </div>     
                                        <div className="col-md-5">
                                            <div>Администратор</div>
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