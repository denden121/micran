import React from 'react'


const NameGroupps = (props) =>{
    let temp ={
        0:{
            fields:{
                name:"Данил",
                discription:"дурачок",
                members:"Данил Юра Настя"
            }
        },
        1:{
            fields:{
                name:"Юра",
                discription:"Не дурачок",
                members:"Данил Юра Настя"
            }
        },
        2:{
            fields:{
                name:"Настя",
                discription:"алорал",
                members:"Данил Юра Настя"
            }
        }, 
        3:{
            fields:{
                name:"Данил",
                discription:"дурачок",
                members:"Данил Юра Настя"
            }
        }
        
    }
    console.log(temp)
        
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

