import React, { Component } from 'react';
import { connect } from "react-redux";
import { selectBook } from "../actions";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList = () => this.props.books.map(book => (
    <li
      key={book.title}
      className="list-group-item"
      onClick={() => this.props.selectBook(book)} >
      {book.title}
    </li>
  ));

  render() {
    return (
      <ul className="col-sm-4 list-group">
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = state => (
  { books: state.books }
)

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);