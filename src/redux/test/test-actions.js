import  {
    SET_ERRORS,
    GET_CATEGORIES_SUCCESS,
    GET_SUB_CATEGORIES_SUCCESS,
    CLEAR_SUB_CATEGORIES
  } from '../action-types';
import axios from "axios";
import authHeader from '../../config/authHeader';
import config from '../../config/constants';
let backend_url = config.host+":"+config.back_end_port

export const getCategories = () => dispatch => {
    return axios.get(backend_url+"/api/category/listing",
    {
        headers : authHeader()
    })
     .then(res => {
        if(res.status === 200) {
            let data = res.data;
            let categories = []
            data.forEach(ele => {
                categories.push(ele.category)
            });
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                // payload: categories.slice(0,11)
                payload : data
                });
            return {"success" : true};
        }
    })
    .catch(err => {
        if(err.response.status === 400 ){
            dispatch({
              type: SET_ERRORS,
              payload: "Bad Request. Please try again."
            });
        }
        else{
            dispatch({
                type: SET_ERRORS,
                payload: "Couldn't load categories. Please try again."
            });
        }
        return { "success": false};
    });
}

export const getSubCategories = (category) => dispatch => {
    return axios.get(backend_url+"/api/category/subcategory?category="+category,
    {
        headers : authHeader()
    })
     .then(res => {
        if(res.status === 200) {
            let data = res.data;
            let subCategories = []
            data.forEach(ele => {
                subCategories.push(ele.subCategory)
            });
            dispatch({
                type: GET_SUB_CATEGORIES_SUCCESS,
                payload: {
                    "selectedCategory" : category,
                    "subCategories" : data
                }
                });
            return {"success" : true};
        }
    })
    .catch(err => {
        if(err.response.status === 400 ){
            dispatch({
              type: SET_ERRORS,
              payload: "Bad Request. Couldn't load sub categories. Please try again."
            });
        }
        else{
            dispatch({
                type: SET_ERRORS,
                payload: "Couldn't load sub categories. Please try again."
            });
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