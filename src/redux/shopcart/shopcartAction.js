import serverUrl from '../../utils/serverUrl'
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

function addProduct(productId) {
  return (dispatch, getState) => {
    const state = getState()
    dispatch({ type: ADD_PRODUCT_REQUEST });

    return new Promise((resolve, reject) => {
      fetch(`${serverUrl}/user/shopcart/add/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${state.auth.token}`
      },
    }).then(() => {
        dispatch({
          type: ADD_PRODUCT_SUCCESS,
        });
        return resolve()
      })
      .catch((error) => {
        dispatch({
          type: ADD_PRODUCT_FAILURE,
          error: error,
        });
        return reject(error)
      });
    })
  };
}

function removeProduct(productId) {
  return (dispatch, getState) => {
    const state = getState()
    dispatch({ type: REMOVE_PRODUCT_REQUEST });

    return new Promise((resolve, reject) => {
      fetch(`${serverUrl}/user/shopcart/remove/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${state.auth.token}`
      },
    }).then(() => {
      dispatch({
        type: REMOVE_PRODUCT_SUCCESS,
        productId: productId
      });
      return resolve()
    })
      .catch((error) => {
        dispatch({
          type: REMOVE_PRODUCT_FAILURE,
          error: error,
        });
        return reject(error)
      });
    })
  };
}

function getShopcart() {
  return (dispatch, getState) => {
    const state = getState()
    dispatch({ type: GET_PRODUCTS_REQUEST });

    return new Promise((resolve, reject) => {
      fetch(`${serverUrl}/user/shopcart`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${state.auth.token}`
      },
    }).then(res => res.json())
      .then((response) => {
        // This mean a 400 status
        if (response.message) {
          dispatch({
            type: GET_PRODUCTS_FAILURE,
            error: response.message,
          });
          return reject(response.message)
        }
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: response,
        });
        return resolve()
      })
      .catch((error) => {
        dispatch({
          type: GET_PRODUCTS_FAILURE,
          error: error,
        });
        return reject(error)
      });
    })
  };
}

export {
  addProduct,
  removeProduct,
  getShopcart
}
