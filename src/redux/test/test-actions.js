import  {
    SET_ERRORS,
    GET_CATEGORIES_SUCCESS,
    GET_SUB_CATEGORIES_SUCCESS,
    CLEAR_SUB_CATEGORIES,
    GET_PREVIOUS_TESTS_SUCCESS
  } from '../action-types';
import axios from "axios";
import authHeader from '../../config/authHeader';
import config from '../../config/constants';
import {setError} from '../error/error-actions';

let backend_url = config.host+":"+config.back_end_port

export const getCategories = () => dispatch => {
    return axios.get(backend_url+"/api/categories",
    {
        headers : authHeader()
    })
     .then(res => {
        if(res.status === 200) {
            let data = res.data;
            let categories = []
            data.forEach(ele => {
                categories.push({label : ele.category , value : ele.category})
            });
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                // payload: categories.slice(0,11)
                payload : categories
                });
            return {"success" : true};
        }
    })
    .catch(err => {
        if(err.response.status === 400 ){
            dispatch(setError("Bad Request. Please try again."))
            // dispatch({
            //   type: SET_ERRORS,
            //   payload: "Bad Request. Please try again."
            // });
        }
        else{
            dispatch(setError("Couldn't load categories. Please try again."))
            // dispatch({
            //     type: SET_ERRORS,
            //     payload: "Couldn't load categories. Please try again."
            // });
        }
        return { "success": false};
    });
}

export const getSubCategories = (category) => dispatch => {
    return axios.get(backend_url+"/api/categories/"+category+"/subcategories",
    {
        headers : authHeader()
    })
     .then(res => {
        if(res.status === 200) {
            let data = res.data;
            let subCategories = []
            data.forEach(ele => {
                subCategories.push({label : ele.subCategory , value : ele.subCategory})
            });
            dispatch({
                type: GET_SUB_CATEGORIES_SUCCESS,
                payload: {
                    "selectedCategory" : category,
                    "subCategories" : subCategories
                }
                });
            return {"success" : true};
        }
    })
    .catch(err => {
        if(err.response.status === 400 ){
            dispatch(setError("Bad Request. Couldn't load sub categories. Please try again."))
            // dispatch({
            //   type: SET_ERRORS,
            //   payload: "Bad Request. Couldn't load sub categories. Please try again."
            // });
        }
        else{
            dispatch(setError("Couldn't load sub categories. Please try again."))
            // dispatch({
            //     type: SET_ERRORS,
            //     payload: "Couldn't load sub categories. Please try again."
            // });
        }
        return { "success": false};
    });
}

export const clearSubCategories = () => dispatch => {
    dispatch({
        type: CLEAR_SUB_CATEGORIES,
        payload: null
    });
}

export const getPreviousTests = () => dispatch => {
    return axios.get(backend_url+"/api/tests/",
    {
        headers : authHeader()
    })
     .then(res => {
        if(res.status === 200 ) {
            let data = res.data;
            dispatch({
                type: GET_PREVIOUS_TESTS_SUCCESS,
                payload: data
                });
            return {"success" : true};
        }
    })
    .catch(err => {
        dispatch(setError("Couldn't load previous tests. Please try again."))
        // dispatch({
        //     type: SET_ERRORS,
        //     payload: "Couldn't load previous tests. Please try again."
        // });
        return { "success": false};
    });
}
