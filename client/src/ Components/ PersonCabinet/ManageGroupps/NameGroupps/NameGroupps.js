import React from 'react'

const NameGroupps = (props) =>{
    let temp = Array.from(props.actions)
    return(
        temp.map((name,index) =>{
            console.log(name)
            let tempId = 'name_' +name.pk
            return(
                <div className="nameGroupps">
                  <td>{name.fields.name}</td>
                </div>
            )
        })
    )
}

export default NameGroupps

