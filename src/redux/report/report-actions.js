import  {
    SET_ERRORS,
    GET_REPORT_SUCCESS
} from '../action-types';
import axios from "axios";
import authHeader from '../../config/authHeader';
import config from '../../config/constants';
import {setError} from '../error/error-actions';

let backend_url = config.host+":"+config.back_end_port


export const getReport = (testId) => dispatch => {
  return axios.get(backend_url+"/api/tests/"+testId,
  {
      headers : authHeader()
  })
   .then(res => {
      if(res.status === 200) {
          let data = res.data;
          dispatch({
              type: GET_REPORT_SUCCESS,
              payload : data
              });
          return {"success" : true};
      }
  })
  .catch(err => {
    dispatch(setError("Couldn't get report for the given testId. Please try again."))
    //   dispatch({
    //       type: SET_ERRORS,
    //       payload: "Couldn't get report for the given testId. Please try again."
    //   });
      return { "success": false};
  });
}
