import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ProductList />
        <Details />
        <Cart />
        <Default />
      </React.Fragment>
    );
  }
}

export default App;
