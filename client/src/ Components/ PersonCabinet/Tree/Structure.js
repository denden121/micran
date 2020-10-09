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

    recursive=(root,num)=>{
        if(root){
            return root.map((item,index)=>{
                num += `-${index}`
                // console.log(item)
                if (item.code){
                    let a = item.users
                    if (item.subdepartments){
                        a = a.concat(item.subdepartments)
                    }
                    return {title: item.code +' '+item.name,
                        key: num,
                        icon: <FolderOutlined/>,
                        children:this.recursive(a,num)
                    }
                }
                else{
                    return {title: item.name,
                        key: num,
                        icon: <SmileOutlined/>,
                    }
                }
                // console.log(i)
                // this.recursive(i.subdepartments)
                // this.recursive(i.users)

            })
        }
        return

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
                console.log(result)
                let a = this.recursive(result)
                this.setState({tree:a})
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