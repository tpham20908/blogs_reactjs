import { FETCH_PEOPLE } from "actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      const people = action.payload.data.results;
      return [...state, ...people];
    default:
      return state;
  }
}