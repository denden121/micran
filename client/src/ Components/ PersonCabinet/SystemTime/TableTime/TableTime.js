import React from "react"

const TableTime =(props)=>{
    return(
        <div className="row">
            <div className="col-md-12">
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">Дата</th>
                            <th scope="col">Время по карточке</th>
                            <th scope="col">Опоздал</th>
                            <th scope="col">Ранний уход</th>
                            <th scope="col">Прогулял</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>19.08.2020</td>
                            <td>Детализация:00:00</td>
                            <td>00:00</td>
                            <td>00:00</td>
                            <td>00:00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableTime