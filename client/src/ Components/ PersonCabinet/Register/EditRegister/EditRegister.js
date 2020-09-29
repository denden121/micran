import React from "react"
import {Form,Card,Checkbox,Radio,Select,Input,Space} from "antd"
import "./EditRegister.css"

const {TextArea} = Input;
const EditRegister =(props)=>{
    return(
        <div className="container-fluid">
            <h5 className="text-left">Редактирование проектов</h5>
            <br/>
            <Card>
            <Form
            labelCol={{ span: 6}}
            wrapperCol={{ span: 12}}
            layout="horizontal"
            
            >
                <Form.Item label="Название проекта">
                    <Input></Input>
                </Form.Item>
                <Form.Item label="Направления">
                    <Select
                    placeholder="Выбрать"/>
                </Form.Item>
                <Form.Item label="Описание">
                    <TextArea
                    autoSize={{ minRows: 1, maxRows: 8 }}
                    placeholder="Введите текст"
                    />
                </Form.Item>
                <hr/>
                <Form.Item label="Руководитель">
                    <Select
                    placeholder="Выбрать"/>
                </Form.Item>
                <Form.Item label="Главный конструктор">
                    <Select
                    placeholder="Выбрать"/>
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
            </Form>
            <Form 
            labelCol={{ span: 6}}
            wrapperCol={{ span: 6}}
            layout="horizontal">
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
            </Card>
        </div>
    )
}

export default EditRegister