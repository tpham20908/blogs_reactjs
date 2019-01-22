import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductConsumer } from '../context';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className='col-9 col-md-6 col-lg-3 mx-auto my-3'>
        <div className='card'>
          <div
            className='img-container p-5'
            onClick={() => console.log('img-container clicked')}>
            <Link to='/details'>
              <img src={img} alt='product' className='card-img-top' />
            </Link>
            <button
              className='cart-btn'
              disabled={inCart}
              onClick={() => console.log('cart-btn clicked')}>
              Add
            </button>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`

`