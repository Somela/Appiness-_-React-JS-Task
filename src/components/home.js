import React from 'react';
import { connect } from 'react-redux';
import  '../css/loading.css';
import {fetchEmployeeDetails} from '../actions/actions';
import {history} from '../helper/history';
import logout from '../images/logout.jpg'


class Home extends React.Component{
    constructor(props){
        super(props);
        this.signOut=this.signOut.bind(this);
        var username = localStorage.getItem("username");
        if(username == null||username==undefined){
            history.push("/")
        }
    }
    componentDidMount(){
        const {dispatch}=this.props
        dispatch(fetchEmployeeDetails());
    }
    signOut(){
        localStorage.removeItem("username");
        if(localStorage.getItem("username")==null || localStorage.getItem("username")==undefined){
            history.push('/');
        }
    }
    LoadTable(employee){
        var employees =employee.items;
        if(employees.length !=0){
            if(employee.items.user.length>0){
        return employee.items.user.map((user,i)=>{
            return (
            <tr id="tblEmployee" key={i}>
                    <td className="tableinfo">{user.id}</td>
                    <td className="tableinfo">{user.name}</td>
                    <td className="tableinfo">{user.age}</td>
                    <td className="tableinfo">{user.gender}</td>
                    <td className="tableinfo">{user.email}</td>
                    <td className="tableinfo">{user.phoneNo}</td>
                </tr>
                )
        })
    }
    }
    }
    populateItems(){
        if(this.props.employee.items>0){
            return (<div className="container">
                <div className="ring">
                    Loading<span></span>
                </div>
            </div>)
        }else
        {
         return <table className="table table-hover">
                <thead>
                    <tr className="theader">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone No</th>
                    </tr>
                </thead>
                <tbody>
                    {this.LoadTable(this.props.employee)}
                </tbody>
            </table>
        }
    }
    render(){
        console.log(this.props.employee);
        return(
            <div className="form">
                <nav className="navbar navbar-dark bg-primary">
                   <h3 className="employeeTitle"> Employee Information</h3>
                   {/* <button className="btn btn-default signout" onClick={this.signOut}> */}
                       <img onClick={this.signOut} className="signout" src={logout} alt="LogOut" />
                    {/* </button> */}
                </nav>
                {this.populateItems()}
            </div>
        )
    }
}
function  mapStateToProps(state){
    return {
        employee: state.employee
    }
}

export default connect(mapStateToProps)(Home);