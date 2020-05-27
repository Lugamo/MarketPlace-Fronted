import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './authTypes';

const initialState = {
  username: null,
  token: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
        loading: false,
        error: null,
      };
    
    default:
      return state;
  }
};
