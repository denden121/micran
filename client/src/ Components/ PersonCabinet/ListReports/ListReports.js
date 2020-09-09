import React from "react"
import { Collapse } from 'antd';
import CollapseList from "./CollapseList/CollapseList"

class ListReports extends React.Component {
    render(){
        const { Panel } = Collapse;
        function callback(key) {
            console.log(key);
        }
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                    <h3 className="text-left">Список отчетов</h3>
                    <hr/>
                    <Collapse accordion defaultActiveKey={['1']} onChange={callback}>
                    <Panel header="Параметры отображения" className="text-left" key="1">
                        <CollapseList/>
                    </Panel>
                    </Collapse>    
                    </div>
                </div>
            </div>
        )
    }
}

export default ListReports