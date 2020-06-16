import { createStore, combineReducers, compose } from 'redux';

import suggestions from './reducers/suggestions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  suggestions,
});

const store = createStore(reducer, composeEnhancers());

export default store;
