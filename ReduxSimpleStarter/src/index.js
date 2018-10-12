import React from 'react';
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyDZsed_FgZXSWJR9HqmY7Xlj73EBoiQyi0";

YTSearch(
  { key: API_KEY, term: "surfboard" },
  data => console.log(data)
  );



const App = () => (
  <div>
    <SearchBar/>
  </div>
)

ReactDOM.render(<App/>, document.querySelector(".container"));