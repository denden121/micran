import React from "react"
import ListEmp from "./ListEmp/ListEmp"
import "./ListEmp/CardModal/CardModal.css"
import CardModal from "./ListEmp/CardModal/CardModal"
import "./Employees.css"
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
// import picture from "../Employees/avatar.png"


class Employees extends React.Component{
    state = {
        workers:{},
        visible: false,
        select_worker:{},
        select_worker_index:'',
        select_list:[]
    }

    showModal = (index) => {
        // const id = this.state.workers[index].pk
        // console.log(index,id)
        this.setState({
            visible: true,
            select_worker_index:index,
            select_worker:this.state.workers[index]
            // select_worker_id: id
        });
    };
    handleOk = e => {
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        const worker = this.state.workers[this.state.select_worker_index]
        console.log('worker',worker)
        let formdata = new FormData();
        formdata.append('part_time_job',worker.person.part_time_job)
        formdata.append('SRI_SAS',worker.person.SRI_SAS)
        formdata.append('oklad',worker.person.oklad)
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body:formdata
        }
        const url = `http://127.0.0.1:8000/cabinet/${worker.pk}/`
        fetch(url, requestOptions)
            .then(response =>  response.json())
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log('error', error))
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        // console.log(e);
        this.setState({
            visible: false,
            select_worker:{}
        });
    };
    loadWorkers = () =>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        const url = `http://127.0.0.1:8000/workers/all/`
        fetch(url, requestOptions)
            .then(response =>  response.json())
            .then(result => this.setState({workers: result,
                                                select_list:result}))
            .catch(error => console.log('error', error))
        // console.log('state',this.state.workers)

    }
    onChangeSRI_SAS=(index,index1)=>{
        // console.log('index',index,'index1',index1.target.checked)
        let temp = this.state.select_worker
        temp.person.SRI_SAS= index1.target.checked
        this.setState({select_worker:temp})
    }
    onChangeOcklad=(index,e)=>{
        // console.log('index',index,'index1',e.target.checked)
        let temp = this.state.select_worker
        temp.person.oklad = e.target.checked
        this.setState({select_worker:temp})
    }
    onChangeRadio=(index,e)=>{
        // console.log('index',index,'index1',e.target.)
        let temp = this.state.select_worker
        temp.person.part_time_job = e.target.value ? false : true
        this.setState({select_worker:temp})
    }
    onChangeSearch=(e)=>{
        let word = e.target.value.toLowerCase();
        let workers = this.state.workers
        let result = workers.filter((item)=>{return item.person.full_name.toLowerCase().startsWith(word) })
        this.setState({select_list: result})
    }
    onClickSave=()=>{
        let token = localStorage.getItem('token')
        let myHeaders = new Headers()
        myHeaders.append("Authorization", token)
        const worker = this.state.select_worker
        let formdata = new FormData();
        formdata.append('part_time_job',worker.person.part_time_job)
        formdata.append('SRI_SAS',worker.person.SRI_SAS)
        formdata.append('oklad',worker.person.oklad)
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body:formdata
        }
        const url = `http://127.0.0.1:8000/cabinet/${this.state.select_worker.pk}`
        fetch(url, requestOptions)
            .then(response =>  response.json())
            .then(result => {
                let tempWorkers = this.state.workers
                let tempWorker = this.state.select_worker
                tempWorkers[this.state.select_worker_index] = tempWorker
                this.setState({workers:tempWorkers,
                                    select_worker:{}})
                console.log(result)
            })
            .catch(error => console.log('error', error))
    }
    componentDidMount() {
        this.loadWorkers()
    }

    render(){
        return(
            <div className="container-fluid">
                <h4 className="text-left">Список сотрудников</h4>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <ListEmp
                            onChangeSearch = {this.onChangeSearch}
                            onClickShowModal={this.showModal} workers={this.state.select_list} onClickPerson={this.onClickPerson}/>
                    </div>
                </div>
                <Modal
                    title="Карточка сотрудника"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={720}
                    cancelText="Права доступа"
                    okText="Сохранить" >
                    <CardModal
                        onClickSave = {this.onClickSave}
                        onChangeSRI_SAS ={this.onChangeSRI_SAS}
                        Workers ={this.state}
                        onChangeOcklad = {this.onChangeOcklad}
                        onChangeRadio = {this.onChangeRadio}
                    />
                </Modal>
            </div>
        )
    }
}

export default Employees