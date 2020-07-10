import React from 'react'


const NameGroupps = (props) =>{
    let temp1 = Array.from(props.listGroup)
    temp1 = temp1.map((groups,index) =>{
        return(
            <tr>
                <th scope="row">{index+1}</th>
                <td>{groups.fields.name}</td>
                <td>{groups.fields.description}</td>
                <td>{groups.fields.users.join(', ')}</td>
            </tr>
        )
    })
    // console.log('result',temp1)
    return(
        temp1
    )
}

export default NameGroupps

