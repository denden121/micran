import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "./TableZp.css"
import BootstrapTable from 'react-bootstrap-table-next';


const TableZp = (props) =>{
    return(
        <div className="tablezp">
            <div className="row">
                <div className="col-sm-12">
                    <div className="table-responsive" style={{overflow:"auto", maxWidth:"100%"}}>
                    <table className="table table-bordered table-sm">
                <tbody>
                    <tr>
                        <th colspan="7" scope="colgroup"></th>
                        <th colspan="3" scope="colgroup">Начисления</th>
                        <th colspan="5" scope="colgroup">Рассчитанные данные</th>
                    </tr>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">ФИО</th>
                        <td></td>
                        <th scope="col">Отраб.дни
                            <br/>(%)</th>
                        <th scope="col">Отчет,
                            <br/>час</th>
                        <th scope="col">Норма,
                            <br/>час</th>
                        <th scope="col">Пропуск,
                            <br/>час</th>
                        <th scope="col">Плановая ЗП,
                            руб</th>
                        <th colspan="2" scope="colgroup">Депримирование за часы,
                            руб</th>
                        <th colspan="2" scope="colgroup">Премия</th>
                        <th scope="col">На руки,руб</th>
                        <th scope="col">Начислено,
                            <br/>руб</th>
                        <th scope="col">Ст-ть часов,руб</th>
                    </tr>
                   <tr>
                       <th colspan="15" scope="colgroup" className="table-secondary">Отдел цифровых устройств</th>
                   </tr>
                   <tr>
                       <td scope="col">1</td>
                       <td scope="col">Осеева</td>
                       <td scope="col">1</td>
                       <td scope="col">18(78%)</td>
                       <td scope="col">0</td>
                       <td scope="col">144</td>
                       <td scope="col" className="red">71</td>
                       <td scope="col"><input type="text" className="in form-control" placeholder="0.00%"></input></td>
                       <td scope="col">1</td>
                       <td scope="col">
                           <label className="checkbox Label2">
                                <input type="checkbox" className="form-check-input"/>
                            </label>
                        </td>
                        <td scope="col"><input type="text" className="in form-control" placeholder="0.00%"></input></td>
                        <td scope="col"><input type="text" className="in form-control" placeholder="0.00руб"></input></td>
                        <td scope="col">1</td>
                        <td scope="col">1</td>
                        <td scope="col">1</td>
                   </tr>
                </tbody>
            </table>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TableZp