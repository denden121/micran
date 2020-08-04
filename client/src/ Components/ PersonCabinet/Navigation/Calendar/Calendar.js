import React from "react"
import "./Calendar.css"


const Calendar = (props) => {
    return(
        <div className="Calendar">
            <div className="year align-center rounded bg-dark">
                <ul>
                    <div onClick={props.onClickPrevios} className="prev">&#10094;</div>
                    <div onClick={props.onClickNext} className="next">&#10095;</div>
                    <li><span style={{fontSize:"18px"}} id = 'year'>{localStorage.getItem('date').split(' ')[1]}</span></li>
                </ul>
            </div>
            <div onClick={props.onClickDate} className="months">
                <div>
                    <div  className="winter border">Дек</div>
                    <div  className="winter border">Янв</div>
                    <div  className="winter border">Фев</div>
                </div>
                <div>
                    <div  className="spring border">Март</div>
                    <div  className="spring border">Апр</div>
                    <div  className="spring border">Май</div>
                </div>
                <div>
                    <div  className="summer border">Июнь</div>
                    <div  className="summer border">Июль</div>
                    <div  className="summer border">Авг</div>
                </div>
                <div>
                    <div  className="autumn border">Сен</div>
                    <div  className="autumn border">Окт</div>
                    <div  className="autumn border">Ноя</div>
                </div>
            </div>
        </div>
    )
}

export default Calendar