import React from 'react'


const SalaryTable = (props) =>{
    // let temp = Array.from(props.listSalary)
    // temp = temp.map((salaries,index) =>{
        return(
            <tbody>
                <tr>
                    <th scope="row">№</th>
                    {/* <td>{index+1}</td> */}
                </tr>
                <tr>
                    <th scope="row">ФИО</th>
                    {/* <td>{salaries.fields.fio}</td> */}
                </tr>
                <tr>
                    <th scope="row">Комментарий</th>
                    {/* <td>{salaries.fields.comment}</td> */}
                </tr>
                <tr>
                    <th scope="row">Отработанные дни</th>
                    {/* <td>{salaries.fields.days}</td> */}
                </tr>
                <tr>
                    <th scope="row">Время по отчету</th>
                    {/* <td>{salaries.fields.reptime}</td> */}
                </tr>
                <tr>
                    <th scope="row">Норма времени</th>
                    {/* <td>{salaries.fields.normtime}</td> */}
                </tr>
                <tr>
                    <th scope="row">Время по Orion</th>
                    {/* <td>{salaries.fields.orion}</td> */}
                </tr>
                <tr>
                    <th scope="row">Плановая З/П</th>
                    {/* <td>{salaries.fields.planzp}</td> */}
                </tr>
                <tr>
                    <th scope="row">Депримирования за часы</th>
                    {/* <td>{salaries.fields.deprize}</td> */}
                </tr>
                <tr>
                    <th scope="row">Премия</th>
                    {/* <td>{salaries.fields.prize}</td> */}
                </tr>
                <tr>
                    <th scope="row">На руки</th>
                    {/* <td>{salaries.fields.hands}</td> */}
                </tr>
                <tr>
                    <th scope="row">Начислено с НДФЛ</th>
                    {/* <td>{salaries.fields.ndfl}</td> */}
                </tr>   
            </tbody>         
        )
    
    // console.log('result',temp1)
    // return(
    //     temp
    // )
}

export default SalaryTable