import React, { Component } from 'react';
import { ProductConsumer } from '../context';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          value => {
            return (
              value.modalOpen ?
                (<div>Modal open</div>) :
                (<button onClick={value.closeModal}>Close modal</button>)
            )
          }
        }
      </ProductConsumer>
    )
  }
}
