import { FETCH_FILM } from "actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FILM:
      // console.log(`${[action.payload.data.url]}: ${action.payload.data.title}`);
      return { ...state, [action.payload.data.url]: action.payload.data.title }
    default:
      return state;
  }
}