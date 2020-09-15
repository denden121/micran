import React from "react"
import {PartitionOutlined,
    FolderOutlined,
    DownOutlined,
    MehOutlined,
    FrownOutlined,
    FrownFilled,
    SmileOutlined,
    FolderOpenOutlined} from '@ant-design/icons'
import { Tree } from 'antd';

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
                tree = tree.map((department,index_dep)=>{
                    let temp1 = Array.from(department.department.subdepartments)
                    return {
                        title: department.department.code + ' ' + department.department.name,
                        key: '0-' + index_dep,
                        icon: <FolderOutlined/>,
                        children: temp1.map((subdepartment, index) => {
                            let directions = Array.from(subdepartment.directions)
                            return {
                                title: subdepartment.code + ' ' + subdepartment.name,
                                key: `0-${index_dep}-${index}`,
                                icon: <FolderOpenOutlined/>,
                                children: directions.map((direction, index_direction) => {
                                    let people = Array.from(direction.users)
                                    return {

                                        title: direction.code + ' ' + direction.name,
                                        key: `0-${index_dep}-${index}-${index_direction}`,
                                        icon: <FolderOpenOutlined/>,
                                        children: people.map((man, index_man) => {
                                            return {
                                                title: man.name,
                                                key: `0-${index_dep}-${index}-${index_direction}-${index_man}`,
                                                icon: <SmileOutlined />
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
                this.setState({tree:tree})
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