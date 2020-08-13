import React from "react"
import {FieldTimeOutlined} from '@ant-design/icons'
import { Checkbox } from 'antd';
import {Select} from "antd";
import CollapseParametr from "./CollapseParametr/CollapseParametr"
import { Collapse } from 'antd';
import { Button } from 'antd';

class SystemTime extends React.Component{
    
    render(){
        const { Panel } = Collapse;
        
        return(
            <div className="container-fluid">
                <div className="label row">                
                    <label className="text-left col-md-12">
                        <FieldTimeOutlined style={{float:"left",fontSize:"23px",padding:"2px"}}/>
                        <h4>Система учета времени</h4>
                        <hr className="normal hr"/>
                    </label>                    
                </div>
                <div className="row text-left">
                    <div className="col-md-12">
                    <Collapse accordion>
                    <Panel header="Параметры отображения">
                        <CollapseParametr/>
                    </Panel>
                    </Collapse>                    
                    </div>                  
                    {/* <label className="text-left col-md-12" style={{marginTop:"-15px"}}>Параметры отображения</label>                                          */}
                </div> 
                
            </div>
        )
    }
}

export default SystemTime