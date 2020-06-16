import { createStore, combineReducers, compose } from 'redux';

import suggestions from './reducers/suggestions';
import results from './reducers/results';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  suggestions,
  results,
});

const store = createStore(reducer, composeEnhancers());

export default store;
