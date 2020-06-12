import { createStore } from 'redux';

import INITIAL_STATE from '../data/items';

const reducer = () => ({});

const store = createStore(reducer, INITIAL_STATE);

export default store;