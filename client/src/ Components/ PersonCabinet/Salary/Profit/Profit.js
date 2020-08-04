import React from 'react'


const Profit = (props) =>{
    if(props.salary) {
        return (
            <tbody>
            <tr> 
                <th scope="row" className="text-left">Плановая ЗП</th>
                <td>{props.salary.plan_salary}</td>
            </tr>
            <tr>
                <th scope="row" className="text-left">Премия</th>
                <td>{props.salary.award}</td>
            </tr>
            <tr>
                <th scope="row" className="text-left">На руки</th>
                <td>{props.salary.salary_hand}</td>
            </tr>
            <tr>
                <th scope="row" className="text-left">ПНачислено</th>
                <td>{props.salary.salary_hand + props.salary.plan_salary}</td>
            </tr>
            </tbody>
        )
    }
    return ''
}

export default Profit