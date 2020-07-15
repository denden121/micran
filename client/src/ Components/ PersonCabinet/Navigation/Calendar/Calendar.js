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
            <div className="months">
                <div>
                    <div onClick={props.onClickDate} className="winter border">Дек</div>
                    <div onClick={props.onClickDate} className="winter border">Янв</div>
                    <div onClick={props.onClickDate} className="winter border">Фев</div>
                </div>
                <div>
                    <div onClick={props.onClickDate} className="spring border">Март</div>
                    <div onClick={props.onClickDate} className="spring border">Апр</div>
                    <div onClick={props.onClickDate} className="spring border">Май</div>
                </div>
                <div>
                    <div onClick={props.onClickDate} className="summer border">Июнь</div>
                    <div onClick={props.onClickDate} className="summer border">Июль</div>
                    <div onClick={props.onClickDate} className="summer border">Авг</div>
                </div>
                <div>
                    <div onClick={props.onClickDate} className="autumn border">Сен</div>
                    <div onClick={props.onClickDate} className="autumn border">Окт</div>
                    <div onClick={props.onClickDate} className="autumn border">Ноя</div>
                </div>
            </div>
        </div>
    )
}

export default Calendar