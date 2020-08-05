import React from "react"

const ListEmp =(props)=>{
    return(
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">№ БД</th>
                            <th scope="col">№ 1С</th>
                            <th scope="col">ФИО</th>
                            <th scope="col">Дата труд-ва</th>
                            <th scope="col">Смена</th>
                            <th scope="col">НИИСЭС</th>
                            <th scope="col">Окладная СОТ</th>
                            <th scope="col">Группы</th>
                            <th scope="col">Подразделения, должность</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default ListEmp