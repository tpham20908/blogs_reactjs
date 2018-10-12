import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" }
  }

  render() {
    return (
      <div className="search-bar">
        <input onChange={e => this.props.onInputChange(e.target.value)} />
      </div>
    );
  }
}

export default SearchBar;