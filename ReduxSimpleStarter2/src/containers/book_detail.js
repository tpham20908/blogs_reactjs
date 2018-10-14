import React, { Component } from 'react';
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if (!this.props.book) return <div>No book selected!</div>
    return (
      <div className="col-sm-8">
        <h2>{this.props.book.title}</h2>
        <p>Pages: {this.props.book.pages}</p>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {book: state.activeBook}
)

export default connect(mapStateToProps)(BookDetail);