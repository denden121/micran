import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Reports from "./Reports/Reports"

class SendReport extends React.Component{
    sendReport =async ()=>{
        let mentor = document.getElementById('mentorProject').value
        let time = document.getElementById('spendTime').value
        let body = document.getElementById('bodeReport').value
        let token = localStorage.getItem('token')

        let myHeaders = new Headers()
        myHeaders.append("Authorization", token);

        let formdata = new FormData();
        formdata.append("text", body);
        formdata.append("hour ", time);
        formdata.append("project", "test");
        formdata.append("curator", mentor);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

         await fetch("http://127.0.0.1:8000/cabinet/reports/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
         alert('Отчет отправлен')
         document.getElementById('mentorProject').value = ''
         document.getElementById('spendTime').value= ''
         document.getElementById('bodeReport').value= ''
    }
    render() {
        return (
            <div>
                <div className container-fluid>
                    <Reports sendReport={this.sendReport}/>
                    //
                </div>
            </div>
        )
    }
}

export default SendReport