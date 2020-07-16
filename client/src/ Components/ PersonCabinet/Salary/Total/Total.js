import React from 'react'



const Total = (props) =>{
    return(
        <div className="row no-gutters  overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="prof card col-md-4">
                <div className="card-header text-left">
                    Начислено
                </div>
                <div className="card-body text-left">
                    45438576
                </div>
            </div>
            <div className="prof card col-md-4">
                 <div className="card-header text-left">
                     На руки
                </div>
                <div className="card-body text-left">
                    45438576
                </div>
            </div>
             <div className="prof card col-md-4">
                <div className="card-header text-left">
                    Налог ДФЛ(13%)
                </div>
            <div className="card-body text-left">
                    45438576
             </div>
            </div>
        </div>
    )
}

export default Total