import React from "react"
import {Card,Col,Row,Button,Select,Input} from "antd"

const gridStyle = {
    width: '100%',
    textAlign: 'left',
  };
const { TextArea } = Input;

const Cards = (props) =>{
    console.log(props)
    return props.reports.map((item,key)=>{
        return <Card.Grid onClick ={props.onClickCard.bind(this,key,item.pk)} style={gridStyle}>
            <div className="row">
                <div className="col-lg-6">
                    <div style={{padding:"15px"}} className="text-left"><strong>№{key+1}</strong></div>
                </div>

                <div className="col-lg-6">
                    <div style={{padding:"15px",color:"red"}} className="text-right">{item.hours}ч</div>
                </div>



            <div className="text-right" style={{paddingRight:"5px",paddingBottom:"10px"}}>
                <Button onClick={props.onClickDeleteProject.bind(this,key,item.pk)}  type="primary" danger size="small">
                    Удалить
                </Button>
            </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div style={{padding:"15px"}} className="text-left"><strong>{item.project}</strong></div>
                </div>
            </div>
        </Card.Grid>
    })
}

const ReportModal =(props)=>{
    console.log(props.personDate.reports)
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="list-group-item list-group-item-action list-group-item-danger">Отчет заблокирован руководителем</div>
                    <br/>
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={10}>
                                <Card title="Список проектов" bordered={true}>
                                    <Cards
                                        onClickCard = {props.onClickCard}
                                        onClickDeleteProject = {props.onClickDeleteProject}
                                        reports = {props.personDate.reports}/>
                                </Card>
                                <br/>
                                    <div className="row">
                                        <div className="col-lg-12 text-right">
                                            <button onClick={props.onClickNewProject} className="btn btn-success btn-sm">Добавить проект</button>
                                        </div>
                                    </div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-12 text-right" style={{color:"#40D0E3",fontSize:"20px"}}>
                                        13.80 ч.
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-right" style={{color:"grey"}}>
                                        Итого
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-lg-12 text-right" style={{color:"#40D0E3",fontSize:"20px"}}>
                                        {props.personDate.time_system} ч.
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-right" style={{color:"grey"}}>
                                        Время по карточке
                                    </div>
                                </div>
                            </Col>
                            <Col span={14}>
                                <Card  bordered={true}>
                                    <div className="row">
                                        <div className="col-lg-12 text-left">
                                            <strong>Проект:</strong>
                                        </div>
                                        <br/>
                                        <div className="col-lg-12">
                                            <Select
                                                value={props.selectProjectName}
                                                onChange={props.onChangeProjectName}
                                                options={props.nameProjects}
                                                id={'name-project-look'}
                                                style={{width:"100%"}}/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-12 text-left">
                                            <strong>Часы:</strong>
                                        </div>
                                        <br/>
                                        <div className="col-lg-12">
                                            <input
                                                id={'hours-look'}
                                            style={{width:"100%"}}/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-12 text-left">
                                            <strong>Комментарии:</strong>
                                        </div>
                                        <br/>
                                        <div className="col-lg-12">
                                        <textArea
                                            id={'body-report-look'}
                                        // value={value}
                                            autoSize={{ minRows: 10, maxRows: 20 }}
                                            style={{width:"100%"}}
                                    />
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-12 text-right">
                                            <button
                                                onClick={props.onClickSaveReport}
                                                className="btn btn-success btn-sm">Сохранить</button>
                                        </div>
                                    </div>
                                </Card>
                            </Col>                        
                        </Row>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default ReportModal