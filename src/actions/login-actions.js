import {DisplayEmployeeInfo} from './action-types';

export const loginemployeesBegin = () => ({
    type: DisplayEmployeeInfo.EMPLOYEE_LOGIN
  });
  
  export const loginEmployeesSuccess = logins => ({
    type: DisplayEmployeeInfo.EMPLOYEE_LOGIN_SUCCESS,
    payload: { logins }
  });
  
  export const loginEmployeesFailure = error => ({
    type: DisplayEmployeeInfo.EMPLOYEE_LOGIN_FAILURE,
    payload: { error }
  });

export function loginEmployeeDetails() {
    return dispatch => {
      dispatch(loginemployeesBegin());
      return fetch("data/loginuser.json")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(loginEmployeesSuccess(json));
          return json;
        })
        .catch(error => dispatch(loginEmployeesFailure(error)));
    };
  }
  
  // Handle HTTP errors since login won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }