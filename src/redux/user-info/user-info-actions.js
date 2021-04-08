import axios from 'axios';
import config from '../../config/constants';
import setAuthToken from '../../config/setAuthToken';
import  {
    RESET_ALL_STATE,
    SET_ERRORS,
    SET_CURRENT_USER
  } from '../action-types';
import {setError} from '../error/error-actions';

let backend_url = config.host+":"+config.back_end_port


export const loginUser = (username,password) => dispatch => {
      dispatch({
        type: RESET_ALL_STATE
      });
       return axios({
            method : "POST",
            url : backend_url+"/api/auth/login",
            data : {
                username : username, password : password
            }
        }).then(function (res) {
            if(res.status === 200 ){
                let data = res.data;
                dispatch({
                  type: SET_CURRENT_USER,
                  payload: data
                });
                localStorage.setItem("user",JSON.stringify(res.data));
                return {"success" : true}
              }
        }).catch(function (error) {
          console.log(error)
          if(error.response.status === 401 ){
            dispatch(setError("Invalid Credentials. Please try again."))
            // dispatch({
            //   type: SET_ERRORS,
            //   payload: "Invalid Credentials. Please try again."
            // });
          }
          else{
            dispatch(setError("Login Failed. Please try again."))
            // dispatch({
            //   type: SET_ERRORS,
            //   payload: "Login Failed. Please try again."
            // });
          }
          return { "success": false};
        });
}

export const signUp = (accountDetails,history) =>{
    return ( dispatch ) => {
        axios({
            method:"POST",
            url:backend_url+"/api/auth/register",
            headers: {
                'Content-Type': 'application/json'
              },
            data: accountDetails
        })
        .then(function (response) {
            if(response.status == 200 ){
                let data = response.data;
                history.push("/login");
                dispatch( {
                    type: RESET_ALL_STATE,
                    payload: data
                });
                return { "success": true};
            }
        })
        .catch(err => {
            dispatch(setError("SignUp Failed. Please try again."))
            // dispatch({
            //   type: SET_ERRORS,
            //   payload: "SignUp Failed. Please try again."
            // });
            return { "success": false};
          }
          );

    }
}

export const setCurrentUser = decoded => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: decoded
  });
}

export const logoutUser = (history) => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("user");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch({
    type: RESET_ALL_STATE
  });
  return {"success" : true};
  // TODO Redirect
};
