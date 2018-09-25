import React, { Component } from 'react';
import { Route } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/post" component={CommentBox} />
        <Route exact path="/" component={CommentList} />
      </div>
    )
  }
}

export default App;