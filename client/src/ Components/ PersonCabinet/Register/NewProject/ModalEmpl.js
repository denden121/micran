import React from "react"
import {Form,Input,Select,Radio} from "antd"
import "./ModalEmpl.css"
import { Checkbox } from 'antd';
const {TextArea} = Input
const ModalEmpl =(props)=>{
    return(
        <div className="container-fluid">
            <Form
            labelCol={{ span: 9}}
            wrapperCol={{ span: 12}}
            layout="horizontal">
                <Form.Item label="Название проекта">
                    <Input id={'name'} onChange={props.onChangeName} value={props.personDate.fields.name}></Input>
                </Form.Item>     
                <Form.Item label="Направления" style={{marginTop:"-10px"}}>
                    <Select
                        defaultValue={props.personDate.fields.direction}
                    placeholder="Выбрать"
                    ></Select>
                </Form.Item>
                <Form.Item label="Описание" style={{marginTop:"-10px"}}>
                    <TextArea
                    autoSize={{ minRows: 1, maxRows: 8 }}
                    placeholder="Введите текст"/>
                </Form.Item>    
                <hr style={{marginTop:"-15px"}}/>
                <Form.Item label="Руководитель" >
                    <Select
                    placeholder="Выбрать"
                    ></Select>
                </Form.Item>
                <Form.Item label="Гл.конструктор" style={{marginTop:"-10px"}}>
                    <Select
                    placeholder="Выбрать"
                    ></Select>
                </Form.Item>  
                <Form.Item label="Зам.Гл.конструктора" style={{marginTop:"-10px"}}>
                    <Select
                    placeholder="Выбрать"
                    ></Select>
                </Form.Item>      
                <hr style={{marginTop:"-15px"}}/>    
                <Form.Item label="№ договора" >
                <TextArea
                    autoSize={{ minRows: 1, maxRows: 8 }}
                    placeholder="Введите текст"/>
                </Form.Item>  
                <Form.Item label="Заказчик"style={{marginTop:"-10px"}}>
                <TextArea
                    autoSize={{ minRows: 1, maxRows: 8 }}
                    placeholder="Введите текст"/>
                </Form.Item>   
                <Form.Item label="Заказ на производство" style={{marginTop:"-10px"}}>
                <TextArea

                    autoSize={{ minRows: 1, maxRows: 8 }}
                    placeholder="Введите текст"/>
                </Form.Item>       
                <Form.Item label="Комментарий" style={{marginTop:"-10px"}}>
                <TextArea
                    autoSize={{ minRows: 1, maxRows: 8 }}
                    placeholder="Введите текст"/>
                </Form.Item>  
                <Form.Item label="Тип" style={{marginTop:"-10px"}}>
                    <Radio.Group>
                        <Radio  value={0}><label className="tip1" for="inlineCheckbox1">Внутр</label></Radio>
                         <Radio value={1}><label className="tip2" for="inlineCheckbox1">Внеш</label></Radio>
                    </Radio.Group>
                </Form.Item>   
                <Form.Item label="Состояние" style={{marginTop:"-10px"}}>
                    <Radio.Group>
                        <Radio  value={0}><label className="open" for="inlineCheckbox1">Открыт</label></Radio>
                         <Radio value={1}><label className="cclose" for="inlineCheckbox1">Закрыт</label></Radio>
                    </Radio.Group>
                </Form.Item>     
                <Form.Item label="Доступность для отчетов сотр-в" style={{marginTop:"-10px"}}>
                    <Radio.Group>
                        <Radio  value={0}><label className="open" for="inlineCheckbox1">Доступен</label></Radio>
                         <Radio value={1}><label className="cclose" for="inlineCheckbox1">Недоступен</label></Radio>
                    </Radio.Group>
                </Form.Item>  
                <Form.Item label="Приемка ВП">
                    <Checkbox>
                        <label className="pp" for="inlineCheckbox1">ПП</label>
                    </Checkbox>
                </Form.Item>                                                                                                 
            </Form>
        </div>
    )
}

export default ModalEmpl 