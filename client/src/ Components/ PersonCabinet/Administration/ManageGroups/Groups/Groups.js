import React from 'react'


const Groups = (props) =>{
    let result = Array.from(props.listGroup)
    return result = result.map((groups,index) =>{
        return(
            <tr>
                <th scope="row">{index+1}</th>
                <td>{groups.fields.name}</td>
                <td>{groups.fields.description}</td>
                <td>{groups.fields.users.join(', ')}</td>
            </tr>
        )
    })
}

export default Groups

