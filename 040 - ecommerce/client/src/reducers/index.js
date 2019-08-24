import { combineReducers } from 'redux';
import products from './product';
import product from './detail';

export default combineReducers({
  products,
  product
});
