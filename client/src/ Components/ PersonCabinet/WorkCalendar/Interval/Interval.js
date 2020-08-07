import React from "react"
import {ArrowsAltOutlined} from '@ant-design/icons'
import {PartitionOutlined} from '@ant-design/icons'
import {BlockOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css';
import {Button} from 'antd';
import "./Interval.css"
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

class Interval extends React.Component {
    render(){
        const animatedComponents = makeAnimated();
        return(
            <div className="container-fluid">
                <div className="label row">
                    <label className="text-left col-md-12"><h4>График отпусков</h4>
                        <hr className="normal hr"/>
                    </label>                    
                </div>
                <div className="label row">
                    <label className="text-left col-md-12">Параметры отображения</label>                                         
                </div>                  
                <div className="row">
                    <div className="col-md-9 col-lg-9">                        
                        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static"> 
                                <div className="row">
                                    <div className="col-md-4">
                                        <ArrowsAltOutlined style={{float:"left", padding:"2px",color:"#3A4F84"}}/>
                                        <label className="LabelL"><h6>Интервал</h6></label>   
                                    </div>
                                    <div className="text-left col-md-8">
                                        <Button type="primary" style={{backgroundColor:"#7F98D8", borderColor:"#7F98D8"}}>Месяц</Button>
                                        <Button type="primary" style={{backgroundColor:"#7F98D8", borderColor:"#7F98D8", marginLeft:"5px"}}>Год</Button>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-4">
                                        <PartitionOutlined style={{float:"left", padding:"2px",color:"#3A4F84", transform: 'rotate(90deg)'}}/>
                                        <label className="LabelL"><h6>Подразделение</h6></label>
                                    </div>
                                    <div className="col-md-8">
                                        <div style={{marginBottom:"7px"}}>
                                            <Select                                
                                            components={animatedComponents}
                                            isMulti                                
                                            placeholder="Выбрать"
                                            /> 
                                        </div>
                                        <div>
                                            <Select                                
                                            components={animatedComponents}
                                            isMulti                                
                                            placeholder="Выбрать"                                        
                                            /> 
                                        </div>                                    
                                    </div>                                    
                                </div> 
                                <br/>                    
                                <div className="row">
                                    <div className="col-md-4">
                                        <BlockOutlined style={{float:"left", padding:"2px",color:"#3A4F84"}}/>
                                        <label className="LabelL"><h6>Условные обозначения</h6></label>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="symbol1 rounded">12</div>
                                        <div className="lab">
                                            <label className="LabelL" >- Не определено (не влияет на норму часов)</label>
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
}

export default Interval;