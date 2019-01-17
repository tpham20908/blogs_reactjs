import { FETCH_ITEMS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      const allItems = action.payload;
      return allItems;
    default:
      return state;
  }
}