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
<<<<<<< HEAD
                <th scope="row" className="text-left">Начислено</th>
                <td>{((props.salary.salary_hand * 100) / 87).toFixed(2) }</td>
=======
                <th scope="row" className="text-left" style={{padding:"10px"}}>Начислено</th>
                <td>{props.salary.salary_hand + props.salary.plan_salary}</td>
>>>>>>> 682302c4544368ae0e555df55c6bc6f35fe067f7
            </tr>
            </tbody>
        )
    }
    return ''
}

export default Profit