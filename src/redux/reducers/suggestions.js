import { type as suggestions } from '../actions/actionSuggestions';
import items from '../../data/items';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  console.log('type--->', type);
  console.log('suggestions->', suggestions);

  if ( type === suggestions ) {
    const regex = new RegExp(`^${payload}` , 'i');
    return items.filter(n => regex.test(n.title));
  }

  return state;
}

export default reducer;
