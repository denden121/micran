import React from 'react'


const NameGroupps = (props) =>{
    console.log('props',props.listGroup)
    let temp1 = [props.listGroup]
    console.log('temp1',temp1)
    temp1 = temp1.map((groups,index) =>{
        console.log('temp',groups)
        let tempId = 'name_' +groups.pk
        return(
            <div className="nameGroupps">
                <tr>
                    <th scope="row">{index}</th>
                    <td>{groups.name}</td>
                    <td>{groups.discription}</td>
                    <td>{groups.members}</td>
                </tr>                  
            </div>
        )
    })
    return(
        temp1
    )
}

export default NameGroupps

