import React from "react"
import $ from 'jquery'
import datepickerFactory from 'jquery-datepicker';
import datepickerJAFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-ja';

class Calendar extends React.Component{
    // datepickerFactory($);
    // datepickerJAFactory($);
    $(function () {
        $('#datetimepicker10').datetimepicker({
            viewMode: 'years',
            format: 'MM/YYYY'
        });
    });
    render(){
        return(
               
                <div className="col-sm-6" style={{height:"130px"}}>
                    <div className="form-group">
                        <div className='input-group date' id='datetimepicker10'>
                            <input type='text' className="form-control" />
                            <span className="input-group-addon">
                            </span>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Calendar