import React from "react"
import { Checkbox } from 'antd';
import { Select } from 'antd';

const plainOptions = ['Весь список', 'Только НИИ СЭС', 'Отображать заблокированный отчет в виде таблицы'];
const { Option } = Select;

const       CollapseList =(props)=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                <Checkbox.Group options={plainOptions} />                
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-lg-12">
                <Select
                    options={props.departments}
                    placeholder="Выбрать департамент"
                    style={{width:"70%"}}
                    onChange={props.onChangeSelectDepartments}
                />
                </div>
                <br/>
                <br/>
                <div className="col-lg-12">
                <Select
                    onChange={props.onChangeSelectSubDepartments}
                    options={props.subdepartments}
                    placeholder="Все доступные подразделения"
                    style={{width:"70%"}}
                />
                </div>
            </div>
        </div>
    )
}

export default CollapseList