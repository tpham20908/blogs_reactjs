import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    term: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.handleSubmit}>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              onChange={e => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
            <button>Search</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;