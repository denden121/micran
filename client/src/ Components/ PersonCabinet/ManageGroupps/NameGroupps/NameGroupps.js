import React from 'react'


const NameGroupps = (props) =>{
   
        
    let temp1 = Array.from(temp)
    console.log(temp1)
    temp1 = temp1.map((groupps,index) =>{
        console.log(groupps)
        let tempId = 'name_' +groupps.pk
        return(
            <div className="nameGroupps">
                <tr>
                    <th scope="row">{index}</th>
                    <td>{groupps.fields.name}</td>
                    <td>{groupps.fields.discription}</td>
                    <td>{groupps.fields.members}</td>
                </tr>                  
            </div>
        )
    })
    return(
        temp1
    )
}

export default NameGroupps

