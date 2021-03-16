import { SET_CURRENT_USER } from "../action-types";

const initialState = {
    isLoggedIn : false
};

export default function(state = initialState, action) {
    switch (action.type) {
      case SET_CURRENT_USER:
        return Object.assign({},  action.payload, { isLoggedIn : true})
      default:
        return state;
    }
  }