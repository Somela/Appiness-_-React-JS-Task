import {DisplayEmployeeInfo} from './action-types';

export const fetchemployeesBegin = () => ({
    type: DisplayEmployeeInfo.EMPLOYEE_REQUEST
  });
  
  export const fetchEmployeesSuccess = employees => ({
    type: DisplayEmployeeInfo.EMPLOYEE_SUCCESS,
    payload: { employees }
  });
  
  export const fetchEmployeesFailure = error => ({
    type: DisplayEmployeeInfo.EMPLOYEE_FAILURE,
    payload: { error }
  });

export function fetchEmployeeDetails() {
    return dispatch => {
      dispatch(fetchemployeesBegin());
      return fetch("data/employeeDetails.json")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchEmployeesSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchEmployeesFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }