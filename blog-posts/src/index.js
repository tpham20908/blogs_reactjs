import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';

import reducers from "./reducers";
import PostsIndex from "./components/PostsIndex";

const store = createStore(reducers, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));