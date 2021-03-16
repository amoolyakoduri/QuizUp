import { SET_ERRORS } from '../action-types';

const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
      case SET_ERRORS:
          return [
            ...state,
            action.payload];

      default:
        return state;
    }
  }