import { GET_REPORT_SUCCESS
} from "../action-types";

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_REPORT_SUCCESS:
            return action.payload;
        default:
            return state;
    }
  }