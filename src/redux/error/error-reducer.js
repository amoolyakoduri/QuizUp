import { SET_ERRORS,CLEAR_ERRORS } from '../action-types';

const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
      case SET_ERRORS:
          return [
            ...state,
            action.payload];
      case CLEAR_ERRORS:
        return [];
      default:
        return state;
    }
  }