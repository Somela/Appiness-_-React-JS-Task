import React from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from './helper/history';
import { PrivateRoute } from './helper/route';
import  Home from './components/home';
import  Login from './components/login';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="form">
                <Router history={history}>
                    <div>
                     <PrivateRoute exact path="/" component={Login} />
                       <Route exact path="/home" component={Home} />
                    </div>
                </Router>
            </div>
        );
    }
}



export default App