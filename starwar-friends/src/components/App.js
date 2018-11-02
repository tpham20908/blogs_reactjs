import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPeople } from "actions";
import List from "components/List";
import SearchForm from "components/SearchForm";

/**
 * Fetch the first 20 people from API endpoint and store them in state
 * Pass people list to List component and render List
 * TODO: handleSearch() not working
 */
class App extends Component {
  componentWillMount() {
    for (let i = 1; i <= 2; i++) {
      this.props.fetchPeople("https://swapi.co/api/people/?page=" + i);
    }
  }

  handleSearch(searchTerm) {
    const peopleList = this.state.people;
    const searchedList = peopleList.filter(person => {
      return person.name.includes(searchTerm);
    });
    this.setState({
      people: searchedList
    });
    console.log(this.state.people);
  }

  render() {
    const people = this.props.people;
    return (
      <div>
        <SearchForm search={this.handleSearch} />
        <hr />
        <List people={people} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { people: state.people }
}

export default connect(mapStateToProps, { fetchPeople })(App);