import  {
    SET_ERRORS,
    QUIZ_DETAILS_SUCCESS,
    SET_CUR_QUES,
    CLEAR_RESPONSE,
    SET_QUES_STATUS,
    SET_RESPONSE,
    START_TIMER,
    SET_ELAPSED_TIME,
  } from '../action-types';
import axios from "axios";
import config from '../../config/constants';
import authHeader from '../../config/authHeader';
import {setError} from '../error/error-actions';

let backend_url = config.host+":"+config.back_end_port

export const setCurQues = (curQues) => dispatch => {
    dispatch({
        type: SET_CUR_QUES,
        payload: curQues
        });
}


export const clearResponse = () => dispatch => {
    dispatch({
        type : CLEAR_RESPONSE,
        payload : null
    })
}

export const setResponse = (response) => dispatch => {
    dispatch({
        type : SET_RESPONSE,
        payload : response
    })
}

export const setQuesStatus = (review) => dispatch => {
    dispatch({
        type : SET_QUES_STATUS,
        payload : review
    })
}

export const startTimer = (startTime,curQues) => dispatch => {
    dispatch({
        type : START_TIMER,
        payload : {startTime,curQues}
    })
}

export const setElapsedTime = (elapsedTime,curQues) => dispatch => {
    dispatch({
        type : SET_ELAPSED_TIME,
        payload : {elapsedTime,curQues}
    })
}

export const startQuiz = (quizStarterDetails) => dispatch => {
    return axios.get(decodeURI(backend_url+`/api/tests/execute/${quizStarterDetails.subCategory}`),
    {
        headers : authHeader()
    })
     .then(res => {
        if(res.status === 200)
        {
            let questions = res.data;
            questions.forEach(ques => {
                ques["startTime"] = null;
                ques["status"] = "Not Opened";
                ques["elapsedTime"] = 0;
                ques["ans"] = "";
                if(ques.objective === true){
                    ques["instr"] = "Select any ONE option."
                }
            });
            let quizDetails = {
                id : "123",
                duration : 15, // mins
                startDate : Date.now(),
                questions : questions
            }
            dispatch({
                type: QUIZ_DETAILS_SUCCESS,
                payload: quizDetails
                });
            return {"success" : true};
        }
    })
    .catch(err => {
        if(err.response.status === 400 ){
            dispatch(setError("Bad Request. Please try again."))
            // dispatch({
            //     type: SET_ERRORS,
            //     payload: "Bad Request. Please try again."
            // });
        }
        else{
            dispatch(setError("Quiz Not Created. Please try again."))
            // dispatch({
            //     type: SET_ERRORS,
            //     payload: "Quiz Not Created. Please try again."
            // });
        }
        return { "success": false};
    });
}


export const submitQuiz = (quizData) => dispatch => {
    return axios.post(backend_url+"/api/tests",
    quizData,
    {
        headers : authHeader()
    })
     .then(res => {
        if(res.status === 201 || res.status===200)
        {
            let testId = res.data.testId;
            return {success : true, testId : testId};
        }
    })
    .catch(err => {
        dispatch(setError("Quiz Could Not Be Submitted. Please try again."))
        // dispatch({
        //     type: SET_ERRORS,
        //     payload: "Quiz Could Not Be Submitted. Please try again."
        // });
        return { success: false};
    });
}