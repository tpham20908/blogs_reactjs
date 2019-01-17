import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

import { fetchItems } from '../actions'
import SearchForm from './SearchForm';
import FoundItems from './FoundItems';
import FavouriteItems from './FavouriteItems';

class App extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div>
        <SearchForm/>
        <FoundItems allItems={this.props.allItems}/>
        <FavouriteItems/>
      </div>
    );
  }
}

const mapStateToProps = ({ allItems }) => ({ allItems });

const mapDispatchToProps = dispatch => ({ fetchItems: () => dispatch(fetchItems()) });

export default connect(mapStateToProps, mapDispatchToProps)(App);