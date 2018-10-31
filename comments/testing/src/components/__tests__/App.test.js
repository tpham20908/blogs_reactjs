import React from "react";
import { shallow } from "enzyme";
// import ReactDOM from "react-dom";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

/*
it ("shows a comment box", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App/>, div);

  expect(div.innerHTML).toContain("Comment Box");

  ReactDOM.unmountComponentAtNode(div);
})
*/

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

afterEach(() => {
  wrapped.unmount()
})

it ("shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it ("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
})