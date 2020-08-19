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
        tree:''
    }
    loadTree = ()=>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers();

        myHeaders.append("Authorization", token);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        let tree = {}
        fetch("http://127.0.0.1:8000/departments/", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                tree = Array.from(result)

                console.log(tree)
                tree = tree.map((department,index_dep)=>{
                    console.log()

                    let temp1 = Array.from(department.department.subdepartments)
                    return {
                        title: department.department.department_name,
                            key: '0-'+index_dep,
                        icon: <FolderOutlined/>,
                        children: temp1.map((subdepartment,index)=>{

                            let directions = Array.from(subdepartment.directions)
                            // console.log('directions',directions)
                            return {
                                title: subdepartment.subdepartment_name,
                                key: `0-${index_dep}-${index}`,
                                icon: <FolderOpenOutlined />,
                                children:directions.map((direction,index_direction)=>{
                                    return{
                                        title: direction.direction,
                                        key: `0-${index_dep}-${index}-${index_direction}`,
                                        icon: <FolderOpenOutlined />
                                    }
                                })
                            }
                        })
                    }
                })
                this.setState({tree:tree})
                console.log(tree)
                console.log(treeData)
            })
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
                        treeData={this.state.tree }
                    />,
                    </div>
                </div>
            </div>
        )
    }
}

export default Structure