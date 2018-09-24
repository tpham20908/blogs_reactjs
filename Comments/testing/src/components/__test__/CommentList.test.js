import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import CommentList from "components/CommentList";

let wrapped;
const initialState = {
  comments: ["Comment #1", "Comment #2", "Comment #3"]
}

beforeEach(() => {
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList/>
    </Root>
  )
})

it ("create one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(initialState.comments.length);
});

it ("show the text for each comment", () => {
  expect(wrapped.render().text()).toContain(initialState.comments[0]);
  expect(wrapped.render().text()).toContain(initialState.comments[1]);
  expect(wrapped.render().text()).toContain(initialState.comments[2]);
})