import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    storeProducts.forEach(product => {
      const copiedProduct = { ...product };
      products = [...products, copiedProduct];
    });

    this.setState(() => {
      return { products }
    });
  }

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product }
    })
  }

  addToCart = id => {
    const tempProducts = [...this.state.products];
    const idx = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[idx];
    product.inCart = true;
    product.count = 1;
    product.total = product.price;
    this.setState(() => {
      return {
        products: tempProducts,
        cart: [...this.state.cart, product]
      }
    });
  }

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalOpen: true,
        modalProduct: product
      }
    })
  }

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false }
    })
  }

  render() {
    const valueObj = {
      ...this.state,
      handleDetail: this.handleDetail,
      addToCart: this.addToCart,
      openModal: this.openModal,
      closeModal: this.closeModal
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