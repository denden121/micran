import React from 'react'


const NameGroupps = (props) =>{
    console.log('props',props.listGroup)
    let temp1 = Array.from(props.listGroup)
    console.log('temp1',temp1)
    temp1 = temp1.map((groups,index) =>{
        console.log('temp11111111111111',groups.fields)
        let tempId = 'name_' +groups.pk
        return(
            <div className="nameGroupps">
                <tr>
                    <th scope="row">1</th>                
                    <td>{groups.fields.name}</td>
                    <td>{groups.fields.description}</td>
                    <td>{groups.fields.users.join(' ')}</td>
                </tr>             
            </div>
        )
    })
    return(
        temp1
    )
}

export default NameGroupps

