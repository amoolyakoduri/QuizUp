import { QUIZ_DETAILS_SUCCESS,SET_CUR_QUES,
    CLEAR_RESPONSE, SET_QUES_STATUS, SET_RESPONSE, START_TIMER,
    SET_ELAPSED_TIME, QUIZ_SUBMIT_SUCCESS
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
        case START_TIMER:
            let questions4 = Object.assign([],state.questions);
            let ques4 = questions4[action.payload.curQues];
            ques4.startTime = action.payload.startTime;
            return {
                ...state,
                questions: questions4
            }
        case SET_ELAPSED_TIME:
            let questions5 = Object.assign([],state.questions);
            let ques5 = questions5[action.payload.curQues];
            ques5.elapsedTime = ques5.elapsedTime+action.payload.elapsedTime;
            return {
                ...state,
                questions: questions5
            }
        default:
            return state;
    }
  }