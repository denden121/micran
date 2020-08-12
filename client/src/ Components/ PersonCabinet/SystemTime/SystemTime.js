import React from "react"
import {FieldTimeOutlined} from '@ant-design/icons'
import { Checkbox } from 'antd';
import { Select, Radio } from 'antd';

class SystemTime extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="label row">                
                    <label className="text-left col-md-12">
                        <FieldTimeOutlined style={{float:"left",fontSize:"23px",padding:"2px"}}/>
                        <h4>Система учета времени</h4>
                        <hr className="normal hr"/>
                    </label>                    
                </div>
                <div className="label row">
                    <label className="text-left col-md-12" style={{marginTop:"-15px"}}>Параметры отображения</label>                                         
                </div> 
                <div className="row">
                    <div className="col-md-9 col-lg-9">
                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <div className="row">
                                    <Checkbox>Детализировать</Checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SystemTime