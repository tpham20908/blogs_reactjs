import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import './index.css';

import reducers from "./reducers";
import PostsIndex from "./components/PostsIndex";
import PostsNew from "./components/PostsNew";

const store = createStore(reducers, applyMiddleware(promise));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route exact path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));