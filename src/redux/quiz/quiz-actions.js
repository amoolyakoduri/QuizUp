import  {
    SET_ERRORS,
    QUIZ_DETAILS_SUCCESS,
    SET_CUR_QUES,
    GO_TO_PREV,
    GO_TO_NEXT,
    CLEAR_RESPONSE,
    SET_QUES_STATUS,
    SET_RESPONSE,
    START_TIMER,
    SET_ELAPSED_TIME
  } from '../action-types';
import axios from "axios";
import config from '../../config/constants';
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
    return axios({
        method : "GET",
        url : backend_url+"/api/test/execute?subCategory="+quizStarterDetails.subCategory,
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
            dispatch({
                type: SET_ERRORS,
                payload: "Bad Request. Please try again."
            });
        }
        else{
            dispatch({
                type: SET_ERRORS,
                payload: "Quiz Not Created. Please try again."
            });
        }
        return { "success": false};
    });
}


// questions : [
            //     {
            //         id : 1,
            //         question : "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants",
            //         ans : "",
            //         objective : true,
            //         options : {
            //             A : "Option A",
            //             B : "Option B",
            //             C : "Option C",
            //             D : "Option D"
            //         },
            //     },
            //     {
            //         id : 2,
            //         question : "Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.",
            //         ans : "",
            //         objective : true,
            //         options : {
            //             A : "Option A",
            //             B : "Option B",
            //             C : "Option C",
            //             D : "Option D"
            //         },
            //     },
            //     {
            //         id : 3,
            //         question : "Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.",
            //         ans : "",
            //         objective : true,
            //         options : {
            //             A : "Option A",
            //             B : "Option B",
            //             C : "Option C",
            //             D : "Option D"
            //         },
            //     },
            //     {
            //         id : 4,
            //         question : "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
            //         ans : "",
            //         objective : true,
            //         options : {
            //             A : "Option A",
            //             B : "Option B",
            //             C : "Option C",
            //             D : "Option D"
            //         },
            //     },
            //     {
            //         id : 5,
            //         question : "Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.",
            //         ans : "",
            //         objective : true,
            //         options : {
            //             A : "Option A",
            //             B : "Option B",
            //             C : "Option C",
            //             D : "Option D"
            //         },
            //     },
            //     {
            //         id : 6,
            //         question : "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
            //         ans : "",
            //         objective : true,
            //         options : {
            //             A : "Option A",
            //             B : "Option B",
            //             C : "Option C",
            //             D : "Option D"
            //         },
            //     }
            // ]