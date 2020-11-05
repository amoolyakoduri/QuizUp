import { combineReducers } from "redux";
import { RESET_ALL_STATE } from '../actions/action-types';
import utilReducer from './util-reducer';
import errorReducer from './error-reducer';

const appReducer = combineReducers({
  util : utilReducer,
  error : errorReducer

});

const rootReducer = (state, action) => {
    if (action.type === RESET_ALL_STATE) {
      state = undefined;
    }
    return appReducer(state, action);
  };

export default rootReducer;