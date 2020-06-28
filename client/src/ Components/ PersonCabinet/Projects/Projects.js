import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

class Projects extends Component{
    render(){
        return(
            <div className="container-fluid">
                
                    <div className="otchet">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="box">
                                                    <div className="box-content">
                                                        <strong>Список проектов</strong>
                                                            <div className="clearfix"></div> 
                                                            <hr className="hr-normal"></hr>
                                                            <div id="reports-list">
                                                                Список проектов пуст
                                                            </div>
                                                    </div>                                                
                                                </div>
                                            </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        )
    }
}

export default Projects