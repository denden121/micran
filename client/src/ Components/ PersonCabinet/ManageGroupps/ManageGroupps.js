import React, {Component} from "react"
import NameGroupps from "./NameGroupps/NameGroupps"

class ManageGroupps extends React.Component{
    state = {
        groupps:{}
    }
    render(){
        return(
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Название</th>
                    <th scope="col">Описание</th>
                    <th scope="col">Входит в группу</th>
                </tr>
                </thead>
                <tbody>
                <NameGroupps/>
                </tbody>
            </table>



        )
    }
}
export default ManageGroupps;