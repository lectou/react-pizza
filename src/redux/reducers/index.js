import { combineReducers } from 'redux';

import cart from './cart';
import filter from './filter';
import pizzas from './pizzas';

const reducers = combineReducers({
  cart,
  filter,
  pizzas
});

export default reducers;