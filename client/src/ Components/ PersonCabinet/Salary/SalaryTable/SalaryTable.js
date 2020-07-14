import React from 'react'


const SalaryTable = (props) =>{
    // let temp = Array.from(props.listSalary)
    // temp = temp.map((salaries,index) =>{
        return(
            <tbody>
                <tr>
                    <th scope="row">№</th>
                    {/* <td>{index+1}</td> */}
                    <td>1</td>
                </tr>
                <tr>
                    <th scope="row">ФИО</th>
                    {/* <td>{salaries.fields.fio}</td> */}
                    <td>Гурачевский</td>
                </tr>
                <tr>
                    <th scope="row">Комментарий</th>
                    {/* <td>{salaries.fields.comment}</td> */}
                    <td>hhhhhhhfkerhfowrhgoerhgrgjl jljlk jlk</td>
                </tr>
                <tr>
                    <th scope="row">Отработанные дни</th>
                    {/* <td>{salaries.fields.days}</td> */}
                    <td>1231454657468746767</td>
                </tr>
                <tr>
                    <th scope="row">Время по отчету</th>
                    {/* <td>{salaries.fields.reptime}</td> */}
                    <td>45343435453434</td>
                </tr>
                <tr>
                    <th scope="row">Норма времени</th>
                    {/* <td>{salaries.fields.normtime}</td> */}
                    <td>4564654654654654</td>
                </tr>
                <tr>
                    <th scope="row">Время по Orion</th>
                    {/* <td>{salaries.fields.orion}</td> */}
                    <td>gfdghdkfgh475787</td>
                </tr>
                <tr>
                    <th scope="row">Плановая З/П</th>
                    {/* <td>{salaries.fields.planzp}</td> */}
                    <td>100000000000000000000000000000000</td>
                </tr>
                <tr>
                    <th scope="row">Депримирования за часы</th>
                    {/* <td>{salaries.fields.deprize}</td> */}
                    <td>0</td>
                </tr>
                <tr>
                    <th scope="row">Премия</th>
                    {/* <td>{salaries.fields.prize}</td> */}
                    <td>0</td>
                </tr>
                <tr>
                    <th scope="row">На руки</th>
                    {/* <td>{salaries.fields.hands}</td> */}
                    <td>10555</td>
                </tr>
                <tr>
                    <th scope="row">Начислено с НДФЛ</th>
                    {/* <td>{salaries.fields.ndfl}</td> */}
                    <td>10000</td>
                </tr>   
            </tbody>         
        )
    
    // console.log('result',temp1)
    // return(
    //     temp
    // )
}

export default SalaryTable