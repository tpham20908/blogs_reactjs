import React, { Component } from "react";
import Film from "components/Film";

/**
 * Stateless List component needs to receive an array list of peope from its parent (App)
 * Iterate over the list and return jsx for each person in the list
 * Pass film url to Film (child) component as prop and render Film in an order list
 */
class List extends Component {
  render() {
    const list = this.props.people.map(p => (
      <div key={p.url}>
        <h2>{p.name}</h2>
        <p>Hair color: {p.hair_color}</p>
        <p>Height: {p.height}</p>
        <p>Movies:</p>
        <ol>
          {p.films.map(film => (
            <li key={film}>
              <Film filmUrl={film} />
            </li>
          ))}
        </ol>
        <hr />
      </div>
    ));
    return <div>{list}</div>;
  }
}

export default List;
