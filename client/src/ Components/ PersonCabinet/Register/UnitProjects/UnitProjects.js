import React from "react"

const UnitProjects = (props) =>{
    return(
        <div className="container-fluid">
            <h3 className="text-left">Объединение проектов</h3>
            <br/>
            <div className="row mb-2">
                {/* <div className="col-md-12"> */}
                    <div className="col-md-6 text-left">
                        <h4>Откуда</h4>
                        Переносит ВСЕ часы из проекта "откуда" в проект "куда".
                        После этого проект "откуда" можно удалить из списка проектов
                        <br/>
                        <br/>
                        <h4>Куда</h4>
                        Переносит ВСЕ часы из проекта "откуда" в проект "куда".
                        После этого проект "откуда" можно удалить из списка проектов
                    </div>
                    <div className="col-md-6 text-left">
                        <br/>
                        Проект:
                        <select className="custom-select">
                            <option selected>Выбрать</option>
                        </select> 
                        <br/>
                        <br/>
                        <br/>
                        Проект:
                        <select className="custom-select">
                            <option selected>Выбрать</option>
                        </select>  
                        <br/>
                        <br/>
                        <div className="moveHours" className="text-right">
                            <button className="btn btn-danger btn-sm">Перенести часы</button>
                            <button className="btn btn-secondary btn-sm" style={{marginLeft:"5px"}} onClick={()=>document.location='/cabinet/admin/register'}>Отмена</button>
                        </div> 
                        <div className="moveHours" className="text-right">
                            
                        </div>                                              
                    </div> 
                    <br/>
                    
                                       
                {/* </div> */}
            </div>
            
        </div>
    )
}

export default UnitProjects