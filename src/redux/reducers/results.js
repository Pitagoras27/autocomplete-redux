import { type as results } from '../actions/actionResults';

const INITIAL_STATE = [];
const reducer = (state = INITIAL_STATE, { type, payload }) => {
  if (type === results) {
    return {};
  }

  return state;
}

export default reducer;
