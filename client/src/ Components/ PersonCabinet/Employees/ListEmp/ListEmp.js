import React from "react"
import CardModal from "./CardModal/CardModal"

const Workers = (props) =>{
    let workers = Array.from(props.workers)
    // console.log(workers)
    return workers.map((worker,index)=>{
        // console.log(worker)
        return(
            <tr>
                <th scope="row">1</th>
                <td>{worker.person['№ db']}</td>
                <td><a onClick={props.onClickShowModal.bind(this,index)} style={{cursor:"pointer"}}>{worker.person.full_name}</a></td>
                <td>{worker.person.date}</td>
                <td>{worker.person.shift}</td>
                <td>{worker.person.SRI_SAS ? 'да' : 'нет'}</td>
                <td>{worker.person.ockladnaya}</td>
                <td>{worker.person.groups.join(' ')}</td>
                <td>{worker.person.position}</td>
            </tr>
        )
})

}

const ListEmp =(props)=>{
    return(
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">№ БД</th>
                    <th scope="col">№ 1С</th>
                    <th scope="col">ФИО
                    <input onChange={props.onChangeSearch}/>
                    </th>
                    <th scope="col">Дата труд-ва</th>
                    <th scope="col">Смена</th>
                    <th scope="col">НИИСЭС</th>
                    <th scope="col">Окладная СОТ</th>
                    <th scope="col">Группы</th>
                    <th scope="col">Подразделения,должность</th>
                    </tr>
                </thead>
                <tbody>
                    <Workers onClickShowModal={props.onClickShowModal} workers={props.workers}/>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEmp