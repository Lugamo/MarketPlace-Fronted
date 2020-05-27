import serverUrl from '../../utils/serverUrl'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './authTypes';

function login(email, password) {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    return new Promise((resolve, reject) => {
      fetch(`${serverUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `email=${email}&password=${password}`
    }).then(res => res.json())
      .then((response) => {
        // This mean a 400 status
        if (response.message) {
          dispatch({
            type: LOGIN_FAILURE,
            error: response.message,
          });
          return reject(response.message)
        }

        dispatch({
          type: LOGIN_SUCCESS,
          payload: response,
        });
        return resolve()
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAILURE,
          error: error,
        });
        return reject(error)
      });
    })
  };
}

export {
  login
}
