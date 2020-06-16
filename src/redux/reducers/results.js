import { type as results } from '../actions/actionResults';
import items from '../../data/items';

const INITIAL_STATE = [];
const reducer = (state = INITIAL_STATE, { type, payload }) => {
  if (type === results) {
    const regex = new RegExp(`^${payload}` , 'i');
    return items.filter(n => regex.test(n.title));
  }

  return state;
}

export default reducer;
