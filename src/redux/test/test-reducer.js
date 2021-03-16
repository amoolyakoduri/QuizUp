import { GET_CATEGORIES_SUCCESS,
    GET_SUB_CATEGORIES_SUCCESS,
    CLEAR_SUB_CATEGORIES
} from "../action-types";

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES_SUCCESS:
            return Object.assign({},state,
                { "categories" :  action.payload });
        case GET_SUB_CATEGORIES_SUCCESS:
            return Object.assign({},state, {
                "selectedCategory" : action.payload.selectedCategory,
                "subCategories" :  action.payload.subCategories
            });
        case CLEAR_SUB_CATEGORIES:
            return Object.assign({},state,{
                "selectedCategory" : "",
                "subCategories" :  null
            })
        default:
            return state;
    }
  }