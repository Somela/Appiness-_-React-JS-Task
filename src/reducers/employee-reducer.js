import {DisplayEmployeeInfo} from '../actions/action-types';

  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  export default function EmployeeReducer(state = initialState, action) {
    switch(action.type) {
      case DisplayEmployeeInfo.EMPLOYEE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case DisplayEmployeeInfo.EMPLOYEE_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.employees
        };
  
      case DisplayEmployeeInfo.EMPLOYEE_FAILURE:
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
  