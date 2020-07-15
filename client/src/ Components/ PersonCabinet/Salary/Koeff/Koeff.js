import React from 'react'


const Koeff = (props) =>{
    // let temp = Array.from(props.listSalary)
    // temp = temp.map((salaries,index) =>{
        return(
            <tbody>
                <tr>
                    <th scope="row" className="text-left">Квалификационный коэффициент</th>
                    {/* <td>{index+1}</td> */}
                    <td>1</td>
                </tr>
                <tr>
                    <th scope="row" className="text-left">Количество отработанных часов</th>
                    {/* <td>{salaries.fields.fio}</td> */}
                    <td>Гурачевский</td>
                </tr>
                <tr>
                    <th scope="row" className="text-left">Норма часов по производственному календарю</th>
                    {/* <td>{salaries.fields.comment}</td> */}
                    <td>hhhhhhhfkerhfowrhgoerhgrgjl jljlk jlk</td>
                </tr>
                <tr>
                    <th scope="row" className="text-left">Норма часов сотрудника</th>
                    {/* <td>{salaries.fields.days}</td> */}
                    <td>1231454657468746767</td>
                </tr>
            </tbody>         
        )
    
    // console.log('result',temp1)
    // return(
    //     temp
    // )
}

export default Koeff