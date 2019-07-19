import React from 'react';
import '../css/loading.css';
import '../css/login.css';
import { connect } from 'react-redux';
import {loginEmployeeDetails} from '../actions/login-actions';
import {history} from '../helper/history';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            submitted: false
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    onChange(e){
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(loginEmployeeDetails())
    }
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            if(this.props.logins){
                var users= this.props.logins.items;
                localStorage.setItem('username', JSON.stringify(users.username));
                if(users.username==this.state.email && users.password==this.state.password)
                {
                    history.push("/home");
                }else{
                    alert("UserName and Password is Invalid");
                }
            }
        }
    }
    render(){
        const { email, password, submitted } = this.state;
        const { loggingIn } = this.props;
        return(
            <div className="login-box">
            <form name="form" onSubmit={this.handleSubmit}>
        <div id="textbox" className={'form-group' + (submitted && !email ? ' has-error' : '')}>
            <i className="fas fa-user"></i>
            <input type="text" className="form-control" placeholder="Enter UserName" name="email" value={email} onChange={this.onChange} />
            {submitted && !email &&
                <div className="help-block">Email is required</div>
            }
        </div>
        <div id="textbox" className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            <i className="fas fa-lock"></i>
            <input type="password" className="form-control" placeholder="Enter Password" name="password" value={password} onChange={this.onChange} />
            {submitted && !password &&
                <div className="help-block">Password is required</div>
            }
        </div>
        <div className="form-group">
            <button className="btn btn-primary">Login</button>
            {loggingIn &&
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            }
        </div>
    </form>
            </div>
        )
    }
}
function  mapStateToProps(state){
    return {
        logins: state.logins
    }
}

export default connect(mapStateToProps)(Login);