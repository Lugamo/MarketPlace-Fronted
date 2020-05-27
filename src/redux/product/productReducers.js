import {
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAILURE,
  FILTER_PRODUCTS_REQUEST,
  FILTER_PRODUCTS_SUCCESS,
  FILTER_PRODUCTS_FAILURE,
  CATEGORY_PRODUCTS_REQUEST,
  CATEGORY_PRODUCTS_SUCCESS,
  CATEGORY_PRODUCTS_FAILURE,
  GET_DETAILED_PRODUCT_REQUEST,
  GET_DETAILED_PRODUCT_SUCCESS,
  GET_DETAILED_PRODUCT_FAILURE
} from './productTypes';

const initialState = {
  products: [],
  detailedProduct: {},
  loading: false,
  error: null,
  filters: {
    name: null,
    minPrice: null,
    maxPrice: null,
    category: null
  },
  navigation: {
    actual: 1,
    total: null
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS_REQUEST:
    case FILTER_PRODUCTS_REQUEST:
    case CATEGORY_PRODUCTS_REQUEST:
    case GET_DETAILED_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_PRODUCTS_FAILURE:
    case FILTER_PRODUCTS_FAILURE:
    case CATEGORY_PRODUCTS_FAILURE:
    case GET_DETAILED_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    case SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.data,
        navigation: {
          actual: action.payload.navigation.actual,
          total: action.payload.navigation.total,
        },
        filters: {
          name: action.name,
          minPrice: null,
          maxPrice: null,
          category: null
        },
        loading: false,
        error: null,
      };
    case FILTER_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.data,
        navigation: {
          actual: action.payload.navigation.actual,
          total: action.payload.navigation.total,
        },
        loading: false,
        error: null,
      };
    case CATEGORY_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.data,
        navigation: {
          actual: action.payload.navigation.actual,
          total: action.payload.navigation.total,
        },
        filters: {
          name: null,
          minPrice: null,
          maxPrice: null,
          category: action.category
        },
        loading: false,
        error: null,
      };
    case GET_DETAILED_PRODUCT_SUCCESS:
      return {
        ...state,
        detailedProduct: action.payload,
        loading: false,
        error: null,
      };
    
    default:
      return state;
  }
};
