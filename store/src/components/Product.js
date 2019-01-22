import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    console.log(this.props.product);
    return (
      <div>
        <h3>{this.props.product.title}</h3>
      </div>
    )
  }
}
