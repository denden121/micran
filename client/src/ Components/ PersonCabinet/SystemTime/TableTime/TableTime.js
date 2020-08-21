import React from "react"

const TableTime =(props)=>{
    console.log(props)
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
                        {props.Date.map((user, index)=>{
                            return(<tr>
                                <td scope="row">{index}</td>
                                <td>{user.fields.date}</td>
                                <td>{user.fields.hooky}</td>
                                <td>{user.fields.late}</td>
                                <td>{user.fields.leaving}</td>
                                <td>{user.fields.hooky}</td>
                            </tr> )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableTime