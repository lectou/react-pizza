import { combineReducers } from 'redux';

import basket from './basket';
import filter from './filter';
import pizzas from './pizzas';

const reducers = combineReducers({
  basket,
  filter,
  pizzas
});

export default reducers;