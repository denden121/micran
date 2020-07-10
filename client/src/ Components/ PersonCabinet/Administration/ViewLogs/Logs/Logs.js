import React from 'react'


const Logs = (props) =>{
    let result = Array.from(props.listLogs)
    result = result.map((groups,index) =>{
        return(
            <tr>
                <th scope="row">{index+1}</th>
                <td>{groups.fields.IP}</td>
                <td>{groups.fields.login}</td>
                <td>{groups.fields.action}</td>
                <td>{groups.fields.status ? 'Success' : 'Unsuccess'}</td>
                <td>{groups.fields.date}</td>
            </tr>
        )
    })
    // console.log('result',result)
    return(
        result
    )
}

export default Logs

