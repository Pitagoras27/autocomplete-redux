import { createStore, combineReducers } from 'redux';

import suggestions from './reducers/suggestions';
import INITIAL_STATE from '../data/items';

const reducer = combineReducers({
  suggestions,
});

const store = createStore(reducer, INITIAL_STATE);

export default store;
