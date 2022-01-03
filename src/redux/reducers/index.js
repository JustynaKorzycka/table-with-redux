import { combineReducers } from 'redux';
import isLogged from './isLogged';
import costumerTable from './costumer';

const allReducers = combineReducers({
  isLogged,
  costumer: costumerTable
})

export default allReducers;