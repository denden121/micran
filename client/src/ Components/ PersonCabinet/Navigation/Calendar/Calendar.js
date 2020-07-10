import React from "react"


const Calendar =(props)=>{
    return(
        <div className="month-picker">
            <div className="nativeDatePicker">   
             <input min="2015" type="month" id="month-visit" defaultValue={'December 2020' } name="month-visit" className="form-control"/>
                <span className="validity"></span>
            </div>      
            </div>
    )
}

export default Calendar