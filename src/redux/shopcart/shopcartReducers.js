import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  REMOVE_PRODUCT_REQUEST,
  REMOVE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE
} from './shopcartTypes'

const initialState = {
  shopcart: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
    case REMOVE_PRODUCT_REQUEST:
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT_FAILURE:
    case REMOVE_PRODUCT_FAILURE:
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case REMOVE_PRODUCT_SUCCESS:
      const shopcart = Array.from(state.shopcart)

      // remove id from list
      const newShopcart = shopcart.filter((item) => item.id !== action.productId)

      return {
        ...state,
        shopcart: newShopcart,
        loading: false,
        error: null,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        shopcart: action.payload,
        loading: false,
        error: null,
      };
    
    default:
      return state;
  }
};
