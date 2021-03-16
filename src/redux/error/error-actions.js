import  {
    SET_ERRORS
} from '../action-types';

export const setError = (error) => dispatch => {
    dispatch({
        type: SET_ERRORS,
        payload: error
        });
}
