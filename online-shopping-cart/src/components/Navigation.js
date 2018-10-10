import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
        </ul>
      </nav>
    )
  }
}
