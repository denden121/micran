import React from 'react'
import {FormOutlined} from '@ant-design/icons';


const Groups = (props) =>{
    let result = Array.from(props.listGroup)
    return result = result.map((groups,index) =>{
        return(
            <tr>
                <th scope="row">{index+1}</th>
                <td>{groups.fields.name}</td>                
                <td>{groups.fields.description}</td>
                <td>{groups.fields.users.join(', ')}</td>
                <td><a onClick={()=>{document.location='/cabinet/admin/edit_groups'}}><FormOutlined/></a></td>
            </tr>
        )
    })
}

export default Groups

