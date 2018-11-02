import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      searchTerm: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
      searchTerm: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      input: ""
    });
    const searchTerm = this.state.searchTerm;
    this.props.search(searchTerm);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  value={this.state.input}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <button type="submit">Search</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default SearchForm;
