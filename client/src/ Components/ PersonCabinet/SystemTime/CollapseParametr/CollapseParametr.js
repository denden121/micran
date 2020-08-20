import React from "react"
import { Checkbox } from 'antd';
import {Select} from "antd";
import { DatePicker, Space } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';

const CollapseParametr =(props)=>{
    function onChange(date, dateString) {
        console.log(date, dateString);
    }
    return(
        <div className="container-fluid">
            <div className="row">
                    <div className="col-md-9 col-lg-9">
                        <div className="row no-gutters  overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <div className="row">
                                    <div className="col-md-6 text-left">
                                    <Checkbox>Детализировать</Checkbox>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="col-md-11 text-left">
                                        <Select
                                        placeholder="Выбрать"
                                        style={{width:"50%"}}
                                        options={props.Departments}
                                        onChange={props.onChangeDepartments}
                                        />
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="col-md-11 text-left">
                                        <Select
                                            options={props.Workers}
                                        placeholder="Выбрать"
                                        style={{width:"50%"}}
                                        />
                                    </div>
                                    <br/>
                                    <br/>      
                                    <div className="col-md-9 text-left">
                                        Обновить данные в базе:                                                                                 
                                    </div> 
                                    <div className="col-md-9 text-left" style={{marginTop:"7px"}}>
                                        <DatePicker 
                                            placeholder="Выбрать"
                                            onChange={onChange} 
                                            style={{marginRight:"15px"}}
                                        />  
                                        <Button>Выгрузить</Button>
                                    </div>  
                                    <br/>
                                    <br/> 
                                    <br/>
                                    <div className="col-md-4" style={{marginRight:"1px"}}>
                                        <Input></Input>
                                    </div> 
                                    <div className="col-md-4">
                                        <Button>Выгрузить одного человека по user id</Button>
                                    </div>       
                                    <br/>
                                    <br/>
                                    <div className="col-md-9 text-left">
                                        <Button style={{backgroundColor:"#95de64"}}>Сформировать</Button>
                                        <Button style={{backgroundColor:"#87e8de",marginLeft:"5px"}}>Экспорт</Button>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CollapseParametr