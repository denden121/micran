import React from 'react'


const Profit = (props) =>{
    if(props.salary) {
        return (
            <tbody >
            <tr > 
                <th scope="row" className="text-left" style={{padding:"10px"}}>Плановая ЗП</th>
                <td>{props.salary.plan_salary}</td>
            </tr>
            <tr>
                <th scope="row" className="text-left" style={{padding:"10px"}}>Премия</th>
                <td>{props.salary.award}</td>
            </tr>
            <tr>
                <th scope="row" className="text-left" style={{padding:"10px"}}>На руки</th>
                <td>{props.salary.salary_hand}</td>
            </tr>
            <tr>
                <th scope="row" className="text-left" style={{padding:"10px"}}>Начислено</th>
                <td>{((props.salary.salary_hand * 100) / 87).toFixed(2) }</td>
            </tr>
            </tbody>
        )
    }
    return ''
}

export default Profit