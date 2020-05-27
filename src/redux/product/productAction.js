import queryString from 'query-string'
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
} from './productTypes'

function searchProducts(productName) {
  return (dispatch) => {
    dispatch({ type: SEARCH_PRODUCTS_REQUEST });

    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3001/product?name=${productName}&page=1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res => res.json())
      .then((response) => {
        dispatch({
          type: SEARCH_PRODUCTS_SUCCESS,
          payload: response,
          name: productName
        });
        return resolve()
      })
      .catch((error) => {
        dispatch({
          type: SEARCH_PRODUCTS_FAILURE,
          error: error,
        });
        return reject(error)
      });
    })
  };
}

function categoryProducts(categoryName) {
  return (dispatch) => {
    dispatch({ type: CATEGORY_PRODUCTS_REQUEST });

    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3001/product?category=${categoryName.toLowerCase()}&page=1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res => res.json())
      .then((response) => {
        dispatch({
          type: CATEGORY_PRODUCTS_SUCCESS,
          payload: response,
          category: categoryName.toLowerCase()
        });
        return resolve()
      })
      .catch((error) => {
        dispatch({
          type: CATEGORY_PRODUCTS_FAILURE,
          error: error,
        });
        return reject(error)
      });
    })
  };
}

function pageChangeProducts(newPage) {
  return (dispatch, getState) => {
    const state = getState()
    dispatch({ type: FILTER_PRODUCTS_REQUEST });

    const query = queryString.stringify({
      ...state.products.filters,
      page: newPage
    })

    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3001/product?${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res => res.json())
      .then((response) => {
        dispatch({
          type: FILTER_PRODUCTS_SUCCESS,
          payload: response,
        });
        return resolve()
      })
      .catch((error) => {
        dispatch({
          type: FILTER_PRODUCTS_FAILURE,
          error: error,
        });
        return reject(error)
      });
    })
  };
}

function getDetailedProduct(productId) {
  return (dispatch) => {
    dispatch({ type: GET_DETAILED_PRODUCT_REQUEST });

    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3001/product/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }).then(res => res.json())
      .then((response) => {
        dispatch({
          type: GET_DETAILED_PRODUCT_SUCCESS,
          payload: response,
        });
        return resolve()
      })
      .catch((error) => {
        dispatch({
          type: GET_DETAILED_PRODUCT_FAILURE,
          error: error,
        });
        return reject(error)
      });
    })
  };
}

export {
  searchProducts,
  categoryProducts,
  pageChangeProducts,
  getDetailedProduct
}
