import { combineReducers } from 'redux'
import productReducer from './product/productReducers'
import authReducer from './auth/authReducers'
import shopcartReducer from './shopcart/shopcartReducers'

const rootReducers = combineReducers({
  products: productReducer,
  auth: authReducer,
  shopcart: shopcartReducer
});

export default rootReducers
