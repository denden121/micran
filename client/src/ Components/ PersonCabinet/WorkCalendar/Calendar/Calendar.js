import React from "react"
import "./Calendar.css"

const dates={
    1:31,
    2:28,
    3:31,
    4:31,
    5:31,
    6:30,
    7:31,
    8:31,
    9:30,
    10:31,
    11:30,
    12:31
}
const Persons =()=>{

}
const Days = ()=>{
    let date = localStorage.getItem('date').split(' ')
    console.log('date',date)
    let a = []
    for (let i = 0;i<dates[date[0]];i++){
        a.push(i+1)
    }

    return a.map( item =>{
        return <td scope="col" className="Day">{item}</td>
    })
}

const Calendar =(props)=>{
    console.log(props)
    let date = localStorage.getItem('date').split(' ')
    return(
        <div>
            <table className="table table-bordered table-sm">
                <tbody>
                    <tr>
                        <td colspan="32" scope="colgroup">2020 год</td>
                    </tr>
                    <tr>
                        <td scope="col">ФИО</td>

                        {/*<td scope="col" className="Day"></td>*/}
                        <Days/>
                    </tr>
                    <tr>
                        <td colspan={dates[date[0]]+1} scope="colgroup" className="table-secondary">Отдел</td>
                    </tr>
                    <tr>
                        <td>Осеева Анастасия Михайловна</td>
                        <td scope="col" className="neopred"></td>
                        <td scope="col" className="opl_otpusk"></td>
                        <td scope="col" className="otpusk_bezs"></td>
                        <td scope="col" className="bol_list"></td>
                        <td scope="col" className="progul"></td>
                        <td scope="col" className="plansob"></td>
                        <td scope="col" className="plan_otpusk"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar