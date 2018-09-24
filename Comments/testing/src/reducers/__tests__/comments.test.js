import commentReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it ("handles action of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "Another Comment"
  };
  const newState = commentReducer([], action);

  expect(newState).toEqual(["Another Comment"]);
});

it ("handles action with unknown type", () => {
  const newState = commentReducer([], { type: "adkjiew" });
  expect(newState).toEqual([]);
});