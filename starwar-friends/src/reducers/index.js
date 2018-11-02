import { combineReducers } from "redux";
import filmReducer from "reducers/filmReducer";
import peopleReducer from "reducers/peopleReducer";

const rootReducer = combineReducers({
  people: peopleReducer,
  films: filmReducer
});

export default rootReducer;