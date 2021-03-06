import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ProjectList.css"
import { Button } from 'antd';

const Reports = (props) =>{
    // console.log('reports',props)
    let result = Array.from(props.listProject)
    return (result.map((cardReport, index)=>{

        return (
            <div onClick = {() => {props.onClickCard(index)}} className = "border">
                <div style={{padding:"15px"}} className="text-left"><strong>№{index+1 } 
                {cardReport.fields.project_name}
                </strong> 
                <br/>
                {cardReport.fields.hour} ч.                                
                </div>
                {props.status
                ?''
                :<div className="text-right" style={{paddingRight:"5px",paddingBottom:"10px"}}>
                    <Button onClick={props.onClickDeleteCard.bind(this,cardReport.pk,index)} type="primary" danger size="small">
                        Удалить
                    </Button>
                </div>}
                {/* <div>{cardReport.fields.text}</div> */}
                {/* <div  className="text-left">{cardReport.fields.hour} ч.</div>                 */}
                {/* <div className="delete text-right">
                <button onClick={props.onClickDeleteCard.bind(this,cardReport.pk)} className="btn btn-danger btn-sm">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>Удалить
                </button>
                </div> */}
            </div>
        )
    }))
}

const  ListReports =(props)=>{
    return(
        <div id="proj-list">
            <Reports
                status = {props.status}
                onClickDeleteCard = {props.onClickDeleteCard}
                onClickCard = {props.onClickCard}
                listProject = {props.listProject}/>
            <br/>
            <hr className="normal"/>
        </div>
    )
}
export default ListReports