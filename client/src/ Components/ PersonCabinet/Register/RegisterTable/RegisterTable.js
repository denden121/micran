import React from "react"

const RegisterTable =(props)=>{
    return(
        <div className="container-fluid">
            {/* <div className="row"> */}
                {/* <div className="col-md-12"> */}
                    <div className="table-responsive">
                        <table className="table table-bordered table-sm">
                            <thead>
                                <td colspan="13" scope="colgroup">
                                    {/* <div className="col-sm-1 text-left">
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select> 
                                    </div> */}                                    
                                    10 записей на страницу
                                </td>
                            </thead>
                            <tbody>
                                <th scope="col">Напр-е</th>
                                <th scope="col">Проект</th>
                                <th scope="col">Рук-ль</th>
                                <th scope="col">ГК</th>
                                <th scope="col">Зам ГК</th>
                                <th scope="col">Заказ в пр-во</th>
                                <th scope="col">№ договора</th>
                                <th scope="col">Заказчик</th>
                                <th scope="col">Тип</th>
                                <th scope="col">Сост-е</th>
                                <th scope="col">В отчет</th>
                                <th scope="col">Приемка ВП</th>
                                <th scope="col"></th>
                            </tbody>
                        </table>
                    </div>

                </div>
            // </div>
        // </div>
    )
}
export default RegisterTable