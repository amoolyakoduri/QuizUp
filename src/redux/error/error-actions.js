import  {
    SET_ERRORS,
    CLEAR_ERRORS
} from '../action-types';

export const setError = (error) => dispatch => {
    dispatch({
        type: SET_ERRORS,
        payload: error
        })
            setTimeout(
            () => {return dispatch(clearError())},
            10000,
        );
    }

export const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_ERRORS
        });
}
