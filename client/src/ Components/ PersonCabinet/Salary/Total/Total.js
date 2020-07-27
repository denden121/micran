import React from 'react'



const Total = (props) =>{
    if(props.salary.fields) {
        return(
            <div className="row no-gutters  overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="prof card col-md-4">
                    <div className="card-header text-left">
                        Начислено
                    </div>
                    <div className="card-body text-left">
                        {props.salary.fields.award + props.salary.fields.salary_hand}
                    </div>
                </div>
                <div className="prof card col-md-4">
                     <div className="card-header text-left">
                         На руки
                    </div>
                    <div className="card-body text-left">
                        {props.salary.fields.salary_hand}
                    </div>
                </div>
                 <div className="prof card col-md-4">
                    <div className="card-header text-left">
                        Налог ДФЛ(13%)
                    </div>
                <div className="card-body text-left">
                        {(props.salary.fields.award + props.salary.fields.salary_hand)*0.13}
                 </div>
                </div>
            </div>
        )
    }
    return ''
}

export default Total