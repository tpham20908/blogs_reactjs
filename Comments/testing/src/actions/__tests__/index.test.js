import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe ("saveComment", () => {
  it ("has correct type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  it ("has correct payload", () => {
    const action = saveComment("Dummy Comment");
    expect(action.payload).toEqual("Dummy Comment");
  });
});