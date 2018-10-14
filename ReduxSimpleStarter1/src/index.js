import React, { Component } from 'react';
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import _ from "lodash";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyDZsed_FgZXSWJR9HqmY7Xlj73EBoiQyi0";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searchVideos("tennes");
  }

  searchVideos(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    // throttle the speed of fetching and rendering item using lodash _.debounce()
    const searchVideos = _.debounce((term) => {this.searchVideos(term)}, 300);

    return (
      <div>
        <SearchBar onInputChange={searchVideos} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));