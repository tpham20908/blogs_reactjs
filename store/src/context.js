import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct
  }

  handleDetail = () => {
    console.log('hello from handleDetail');
  }

  handleCart = () => {
    console.log('hello from handleCart');
  }

  render() {
    const valueObj = {
      ...this.state,
      handleDetail: this.handleDetail,
      handleCart: this.handleCart
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