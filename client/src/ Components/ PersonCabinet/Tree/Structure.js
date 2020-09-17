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
        // let tree = {    \}
        fetch("http://127.0.0.1:8000/departments/", requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result)
                // tree = Array.from(result)
                let tree = result
                // console.log(result)
                tree = tree.map((department,index_dep)=>{
                    // console.log(department.subdepartments,department.users)
                    let sub;
                    department.subdepartments
                    ? sub = department.subdepartments.concat(department.users)
                    : sub = department.users
                    return{
                        title: department.code + ' ' + department.name,
                        key: '0-' + index_dep,
                        icon: <FolderOutlined/>,
                        children: sub.map((subdepartment, index) => {
                            let directions;
                            subdepartment.subdepartments
                                ? directions = subdepartment.subdepartments.concat(subdepartment.users)
                                : directions = subdepartment.users
                            return {
                                title: subdepartment.code + ' ' + subdepartment.name,
                                key: `0-${index_dep}-${index}`,
                                icon: <FolderOpenOutlined/>,
                                children: directions.map((direction, index_direction) => {
                                    let directions = [];
                                    if(department.name){
                                        direction = [department]
                                    }
                                    else if(department.subdepartments){
                                        directions = direction.subdepartments.concat(direction.users)
                                    }
                                    else{
                                        directions = direction.users
                                    }
                                    console.log(direction)
                                    return {
                                        title: direction.code + ' ' + direction.name,
                                        key: `0-${index_dep}-${index}-${index_direction}`,
                                        icon: <FolderOpenOutlined/>,
                                        children: directions.map((man, index_man) => {
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

onClickFile=()=>{
    window.location = `http://127.0.0.1:8000/export/?fuck_ura=${'ffff'}`
}

render(){
    return(
        <div className="container-fluid">
                <div className="label row">
                    <button onClick={this.onClickFile}>dssdfds</button>
                    <a href="http://127.0.0.1:8000/export/">ffff</a>
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