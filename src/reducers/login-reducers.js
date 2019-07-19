import {DisplayEmployeeInfo} from '../actions/action-types';

  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  export default function LoginEmployeeReducer(state = initialState, action) {
    switch(action.type) {
      case DisplayEmployeeInfo.EMPLOYEE_LOGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case DisplayEmployeeInfo.EMPLOYEE_LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.logins
        };
  
      case DisplayEmployeeInfo.EMPLOYEE_LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        return state;
    }
  }  
  