import React,{Component} from 'react'



class BrowseReports extends React.Component{
    state ={
        reports:{}
    }
    async componentDidMount() {
        let myHeaders = new Headers();
        let token = localStorage.getItem('token')
        myHeaders.append("Authorization", token);
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch("http://127.0.0.1:8000/cabinet/reports", requestOptions)
            .then(response => response.json())
            .then(result => this.setState({reports: {result}}))
            .catch(error => console.log('error', error));
        console.log(this.state.reports)
    }
    render() {
        return(
            <div>hello</div>
        )
    }
}

export default BrowseReports