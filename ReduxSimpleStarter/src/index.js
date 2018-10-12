import React, { Component } from 'react';
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
const API_KEY = "AIzaSyDZsed_FgZXSWJR9HqmY7Xlj73EBoiQyi0";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch(
      { key: API_KEY, term: "surfboard" },
      data => this.setState({ videos: data })
    );
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));