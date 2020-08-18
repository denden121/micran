import React from "react"
import {PartitionOutlined,
        FolderOutlined,
        DownOutlined,
        MehOutlined,
        FrownOutlined,
        FrownFilled,
        FolderOpenOutlined} from '@ant-design/icons'
import { Tree } from 'antd';

const treeData = [
    {
      title: 'parent 0',
      key: '0-0',
      icon: <FolderOutlined/>,
      children: [
        {
          title: 'leaf',
          key: '0-0-0',
          icon: <FolderOpenOutlined />,
        },
        {
          title: 'leaf',
          key: '0-0-1',
          icon: ({ selected }) => (selected ? <FolderOpenOutlined /> : <FolderOpenOutlined />),
        },
      ],
    },
    {
        title: 'parent 1',
        key: '0-1',
        icon: <FolderOutlined/>,
        children: [
          { 
            title: 'leaf',
            key: '0-1-0',
            icon: <FolderOpenOutlined />,
          },
          {
            title: 'leaf',
            key: '0-1-1',
            icon: ({ selected }) => (selected ? <FolderOpenOutlined /> : <FolderOpenOutlined />),
          },
        ],
      },
  ];
  
class Structure extends React.Component {
    state ={
        tree:{}
    }
    loadTree =async ()=>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers();

        myHeaders.append("Authorization", token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/departments/", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    componentDidMount() {
        this.loadTree()
    }

        render(){
    return(
            <div className="container-fluid">
                <div className="label row">                
                    <label className="text-left col-md-12">
                        <PartitionOutlined style={{float:"left",fontSize:"23px",padding:"2px",transform: 'rotate(90deg)'}}/>
                        <h4>Структура подразделений</h4>
                        <hr className="normal hr"/>
                    </label>                    
                </div>
                <div className="row" >
                    <div className="col-md-6" style={{backgroundColor:"rgba(0,0,0,0)"}}>
                    <Tree
                        showIcon
                        defaultExpandAll
                        defaultSelectedKeys={['0-0-0']}
                        switcherIcon={<DownOutlined />}
                        treeData={treeData}
                    />,
                    </div>
                </div>
            </div>
        )
    }
}

export default Structure