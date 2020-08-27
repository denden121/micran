import React from 'react'



const Total = (props) =>{
    console.log('props total', props)
    if(props.salary) {
        return(
            <div className="row no-gutters  overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="prof card col-md-4">
                    <div className="card-header text-left">
                        Начислено
                    </div>
                    <div className="card-body text-left">
                        {((props.salary.salary_hand * 100) / 87).toFixed(2) }
                    </div>
                </div>
                <div className="prof card col-md-4">
                     <div className="card-header text-left">
                         На руки
                    </div>
                    <div className="card-body text-left">
                        {props.salary.salary_hand}
                    </div>
                </div>
                 <div className="prof card col-md-4">
                    <div className="card-header text-left">
                        Налог ДФЛ(13%)
                    </div>
                <div className="card-body text-left">
                        {(((props.salary.salary_hand * 100) / 87)*0.13).toFixed(2) }
                 </div>
                </div>
            </div>
        )
    }
    return ''
}

export default Total