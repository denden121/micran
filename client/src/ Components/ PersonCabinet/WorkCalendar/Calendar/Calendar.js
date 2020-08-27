import React from "react"
import "./Calendar.css"

const dates={
    '01':31,
    '02':28,
    '03':31,
    '04':31,
    '05':31,
    '06':30,
    '07':31,
    '08':31,
    '09':30,
    '10':31,
    '11':30,
    '12':31
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
    console.log('props',props)

    let date = localStorage.getItem('date').split(' ')
    console.log(date)
    let range_temp = ''
    console.log('rrrrrrrr',props.date)
    if (props.date.range ==='year'){
        range_temp = 54
    }
    else if(props.date.range ==='month'){
        console.log('fffff',date[0])

        range_temp = dates[date[0]]+1
    }
    console.log('range',range_temp)
    return(
        <div>
            <table className="table table-bordered table-sm">
                <tbody>
                    <tr>
                        <td colspan={range_temp} scope="colgroup">2020 год</td>
                    </tr>
                    <tr>
                        <td scope="col">ФИО</td>

                        {/*<td scope="col" className="Day"></td>*/}
                        <Days range ={range_temp}/>
                    </tr>
                    <tr>
                        <td colspan={range_temp} scope="colgroup" className="table-secondary">Отдел</td>
                    </tr>
                    <Persons date = {props.date.persons}/>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar