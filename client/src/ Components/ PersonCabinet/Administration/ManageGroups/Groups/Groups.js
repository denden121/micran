import React from 'react'
import {FormOutlined} from '@ant-design/icons';


const Groups = (props) =>{
    let result = Array.from(props.listGroup)
    return result = result.map((groups,index) =>{
        return(
            <tr>
                <th scope="row">{index+1}</th>
<<<<<<< HEAD
                <td>{groups.fields.name}</td>
                <td><a onClick={props.onClickEditGroup.bind(this,groups.pk)}><FormOutlined/></a></td>
=======
                <td>{groups.fields.name}</td>                
>>>>>>> 12645c64d1ec0d9c8fe47a4fe4f78bbf015cabb5
                <td>{groups.fields.description}</td>
                <td>{groups.fields.users.join(', ')}</td>
                <td><a onClick={()=>{document.location='/cabinet/admin/edit_groups'}}><FormOutlined/></a></td>
            </tr>
        )
    })
}

export default Groups
//()=>{document.location='/cabinet/admin/edit_groups'}
