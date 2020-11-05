import setAuthToken from "../../config/setAuthToken";
import  {
  SET_CURRENT_USER,
  RESET_ALL_STATE,
  GET_ERRORS
} from './action-types';
import jwt_decode from "jwt-decode";
import axios from "axios";

export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };

export const logoutUser = (history) => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  dispatch({
    type: RESET_ALL_STATE
  });

  //history.push("/login");
  history.push({
    pathname: '/login',
    comingFrom: 'logout'
  })

};

// // Login - get user token
// axios.defaults.withCredentials = true;
// export const loginUser = userData => dispatch => {
//   dispatch({
//     type: RESET_ALL_STATE
//   });
//   axios
//     .post("user/login", userData)
//     .then(res => {
//       if(res.data.success || true)
//        {
//           // Save to localStorage// Set token to localStorage
//           //console.log("Response ",res);
//           const { token } = res.data;
//           localStorage.setItem("jwtToken", token);
//           // Set token to Auth header
//           setAuthToken(token);
//           // Decode token to get user data
//           const decoded = jwt_decode(token);
//           // Set current user
//           dispatch(setCurrentUser(decoded));
//        }else{

//         dispatch({
//           type: GET_ERRORS,
//           payload: res.data
//         });

//        }
//       //dispatch(getUserFirstName());
//     })
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };