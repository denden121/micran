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
const colors = {
    0:'',
    1:'neopred',
    2:'opl_otpusk',
    3:'otpusk_bezs',
    4:'bol_list',
    5:'progul',
    6:'plansob',
    7:'ucheb_otpusk',
    8:'plan_otpusk',
}
const Persons =(props)=>{
    console.log('props',props)
    let people = props.date;
    console.log('people',people)

    return people.map((man)=>{
        console.log('man',man)
        return (<tr>
            <td>{man.name}</td>
            {man.fields.map((field)=>{
                console.log(field)
                return <td scope="col" className={colors[field]}></td>
            })}
        </tr>);
    })

}
const Days = (props)=>{
    let date = localStorage.getItem('date').split(' ')
    console.log('date',date)
    let a = []
    for (let i = 0;i<props.range-1;i++){
        a.push(i+1)
    }

    return a.map( item =>{
        return <td scope="col" className="Day">{item}</td>
    })
}

const Calendar =(props)=>{
    console.log(props)

    let date = localStorage.getItem('date').split(' ')
    let range = ''
    if (props.date.range ==='year'){
        range = 54
    }
    else if(props.date.range ==='month'){
        range = dates[date[0]]+1
    }
    return(
        <div>
            <table className="table table-bordered table-sm">
                <tbody>
                    <tr>
                        <td colspan={range} scope="colgroup">2020 год</td>
                    </tr>
                    <tr>
                        <td scope="col">ФИО</td>

                        {/*<td scope="col" className="Day"></td>*/}
                        <Days range ={range}/>
                    </tr>
                    <tr>
                        <td colspan={range} scope="colgroup" className="table-secondary">Отдел</td>
                    </tr>
                    <Persons date = {props.date.persons}/>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar