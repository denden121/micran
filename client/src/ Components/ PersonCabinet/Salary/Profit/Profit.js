import React from 'react'


const Profit = (props) =>{
    if(props.salary.fields) {
        // console.log(props.salary.fields)
        // let temp = Array.from(props.listSalary)
        // temp = temp.map((salaries,index) =>{
        return (
            <tbody>
            <tr>
                <th scope="row" className="text-left">Плановая ЗП</th>
                <td>{props.salary.fields.plan_salary}</td>
            </tr>
            <tr>
                <th scope="row" className="text-left">Премия</th>
                <td>{props.salary.fields.award}</td>
            </tr>
            <tr>
                <th scope="row" className="text-left">На руки</th>
                <td>{props.salary.fields.salary_hand}</td>
            </tr>
            <tr>
                <th scope="row" className="text-left">ПНачислено</th>
                <td>{props.salary.fields.salary_hand + props.salary.fields.salary_hand}</td>
            </tr>
            </tbody>
        )
    }
    return ''
}

export default Profit