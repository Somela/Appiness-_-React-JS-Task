import { combineReducers } from 'redux';
import employee from './employee-reducer';
import logins from './login-reducers';

const rootReducer = combineReducers({
    employee,
    logins
});
export default rootReducer;