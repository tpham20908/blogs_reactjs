import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Router from './Router';
import Navigation from "./Navigation";
import store from "../config/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navigation />
            <Router />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
