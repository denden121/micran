import React from 'react'
import ProjsItem from "./projsItem/projsItem";

const ViewReports = props => (
    <div>
        {props.reps.map((rep, index) => {
            return(
                <ProjsItem
                    rep={rep}
                />
            )
        })}
    </div>
)
export default ViewReports