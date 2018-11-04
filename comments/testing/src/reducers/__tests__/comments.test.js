import { SAVE_COMMENT } from "actions/types";
import commentsReducer from "reducers/comments";

it("handle action of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "new comment"
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(["new comment"]);
});

it("handle action of unknown type", () => {
  const action = {
    type: "asdjk",
    payload: "ief aldsjf"
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([]);
})