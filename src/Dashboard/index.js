import React, {Component} from 'react';
import {getRequest} from '../Service/Api.service';
import {apiUrl} from '../Constants/Api.constants';
import Header from '../Header/index';
import Sidebar from '../Sidebar/index';
import { connect } from 'react-redux';


class Dashboard extends Component{

    constructor(){
        super();
        this.state = {
            name: 'naveen',
            age: 26,
            data: '',
        }
    } 

    clickMe = () => {
        this.setState ({
            name: 'praveen',
            age: 23
        })
        this.props.resetData();
    }

    componentWillMount(){
        console.log(this.props.dashboardData)
        getRequest(apiUrl.DASHBOARD_DATA)
        // .then((res)=>{
        //     return res.json()
        // })
        .then((data)=> {
            this.props.setDashboardData(data.data);
        })
    }

    render(){
        return(
            <div className="common-class">
                <h2>Dashboard</h2>
                <p>I am {this.state.name} and my age is {this.state.age}</p>
                <button onClick={this.clickMe.bind(this)}>click</button>
                <p>{this.props.dashboardData.balance}</p>
                <p>{this.props.dashboardData.cost}</p>
                <p>{this.props.dashboardData.menu}</p>
            </div>
        )
    }
}

// function aa(store){
//     return {
//         dashboardData: store.dashboardReducer.data
//     }
// }
const mapStoreToProps = (store) => ({
    dashboardData: store.dashboardReducer.data
});
const mapDispatchToProps =  (dispath) => ({
    setDashboardData: (data) => dispath({type: 'SET_DASHBOARD_DATA', data}),
    resetData: () => dispath({type:'RESET_DASHBOARD'})
})

export default connect(mapStoreToProps, mapDispatchToProps)(Dashboard)