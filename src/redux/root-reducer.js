import { combineReducers } from "redux";
import { RESET_ALL_STATE } from './action-types';
import utilReducer from './util/util-reducer'
import errorReducer from './error/error-reducer';
import userInfo from './user-info/user-info-reducer';
import quiz from './quiz/quiz-reducer';
import tests from './test/test-reducer';

const appReducer = combineReducers({
  util : utilReducer,
  errors : errorReducer,
  user : userInfo,
  quiz,
  tests
});

const rootReducer = (state, action) => {
    if (action.type === RESET_ALL_STATE) {
      state = { user : { isLoggedIn : false }};
    }
    return appReducer(state, action);
  };

export default rootReducer;