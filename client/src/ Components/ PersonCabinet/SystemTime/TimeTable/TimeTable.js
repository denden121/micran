import React from "react"
import { Table, Input, Button, Space } from 'antd';
// import Highlighter from 'react-highlight-words';
// import { SearchOutlined } from '@ant-design/icons';

const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
        key: '5',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
  ];
  const columns = [
    {
      title: '№',
      dataIndex: 'number',
      key: 'number',
      width: '15%',
    //   ...this.getColumnSearchProps('name'),
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      width: '10%',
    //   ...this.getColumnSearchProps('age'),
    },
    {
      title: 'Время по карточке',
      dataIndex: 'card_time',
      key: 'card_time',
      width:'30%'
    //   ...this.getColumnSearchProps('address'),
    },
    {
        title:'Опоздал',
        dataIndex:'late',
        key:'late',
        width:'20%'
    },
    {
        title:'Ранний уход',
        dataIndex:'departure',
        key:'departure',
        width:'20%'
    },
    {
        title:'Прогулял',
        dataIndex:'missed',
        key:'missed',

    }

  ];

const TimeTable =(props)=>{
    return(
        <div className="container-fluid">
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default TimeTable;