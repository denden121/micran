import React from "react"
import "./Calendar.css"

class Calendar extends React.Component{
    // datepickerFactory($);
    // datepickerJAFactory($);
    // $(function () {
    //     $('#datetimepicker10').datetimepicker({
    //         viewMode: 'years',
    //         format: 'MM/YYYY'
    //     });
    // });
    render(){
        return(
            <div className="Calendar">
                <div>
                    <div className="winter border">Дек</div>
                    <div className="winter border">Янв</div>  
                    <div className="winter border">Фев</div>  
                </div>
                <div>
                    <div className="spring border">Март</div>
                    <div className="spring border">Апр</div>
                    <div className="spring border">Май</div>
                </div> 
                <div>
                    <div className="summer border">Июнь</div>
                    <div className="summer border">Июль</div>
                    <div className="summer border">Авг</div>
                </div>  
                <div>
                    <div className="autumn border">Сен</div>
                    <div className="autumn border">Окт</div>
                    <div className="autumn border">Ноя</div>
                </div>   
            </div>            
        )
    }
}

export default Calendar