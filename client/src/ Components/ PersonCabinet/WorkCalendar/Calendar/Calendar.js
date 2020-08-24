import React from "react"
import "./Calendar.css"


const Calendar =(props)=>{
    return(
        <div>
            <table className="table table-bordered table-sm">
                <tbody>
                    <tr>
                        <td colspan="32" scope="colgroup">2020 год</td>                        
                    </tr>
                    <tr>
                        <td scope="col">ФИО</td>
                        <td scope="col" className="Day"></td>                        
                    </tr>
                    <tr>
                        <td colspan="30" scope="colgroup" className="table-secondary">Отдел</td>
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