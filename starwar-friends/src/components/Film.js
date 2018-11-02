import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFilm } from "actions";

/**
 * Film component needs to receive `film` url as prop from its parent (List)
 * Fetch data based on its prop and return jsx in a div with title of the film
 */
class Film extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  componentWillMount() {
    const filmUrl = this.props.filmUrl;
    const films = this.props.films;
    // console.log(films);
    if (Object.keys(films).includes(filmUrl)) {
      this.setState({ name: films[filmUrl] });
    } else {
      this.props.fetchFilm(filmUrl);
      
      /*
      fetch(filmUrl)
        .then(res => res.json())
        .then(data => {
          this.setState({
            name: data.title
          });
        });
      */
    }
  }

  render() {
    const name = this.state.name;
    if (!name) return <div>Loading...</div>;
    return <div>{name}</div>;
  }
}

const mapStateToProps = state => {
  return { films: state.films };
}

export default connect(mapStateToProps, { fetchFilm })(Film);