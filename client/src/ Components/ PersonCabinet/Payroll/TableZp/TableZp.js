import React from "react"
import "./TableZp.css"

const TableZp = (props) =>{
    return(
        <div className="tablezp">
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive-sm">
                    <table className="table table-bordered table-sm">
                <tbody>
                    <tr>
                        <th colspan="7" scope="colgroup"></th>
                        <th colspan="3" scope="colgroup">Начисления</th>
                        <th colspan="3" scope="colgroup">Рассчитанные данные</th>
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
                        <th scope="col">Депримирование за часы,
                            руб</th>
                        <th scope="col">Премия</th>
                        <th scope="col">На руки,руб</th>
                        <th scope="col">Начислено,
                            <br/>руб</th>
                        <th scope="col">Ст-ть часов,руб</th>
                    </tr>
                   <tr>
                       <th colspan="13" scope="colgroup" className="table-secondary">Отдел цифровых устройств</th>
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