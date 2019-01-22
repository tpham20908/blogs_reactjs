import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    storeProducts.forEach(product => {
      const copiedProduct = { ...product };
      products = [ ...products, copiedProduct ];
    });

    this.setState(() => {
      return { products }
    });
  }

  handleDetail = () => {
    console.log('hello from handleDetail');
  }

  addToCart = id => {
    console.log(`hello from handleCart, product id is ${id}`);
  }

  render() {
    const valueObj = {
      ...this.state,
      handleDetail: this.handleDetail,
      addToCart: this.addToCart
    }

    return (
      <ProductContext.Provider value={valueObj}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };