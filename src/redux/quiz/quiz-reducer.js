import { QUIZ_DETAILS_SUCCESS,SET_CUR_QUES,
    CLEAR_RESPONSE, SET_QUES_STATUS, SET_RESPONSE
    } from "../action-types";

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case QUIZ_DETAILS_SUCCESS:
            return Object.assign({curQues:0}, action.payload)
        case SET_CUR_QUES:
            return {
                ...state,
                 curQues:action.payload }
        case SET_RESPONSE:
            let questions3 = Object.assign([],state.questions);
            let ques3 = questions3[state.curQues];
            ques3.ans = action.payload;
            return {
                ...state,
                questions: questions3
            }
        case CLEAR_RESPONSE:
            let questions1 = Object.assign([],state.questions);
            let ques1 = questions1[state.curQues];
            ques1.ans = "";
            return {
                ...state,
                questions: questions1
            }
        case SET_QUES_STATUS:
            let questions2 = Object.assign([],state.questions);
            let ques2 = questions2[state.curQues];
            ques2.status = action.payload;
            return {
                ...state,
                questions: questions2
            }
        default:
            return state;
    }
  }