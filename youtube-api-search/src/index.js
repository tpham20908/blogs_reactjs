import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import YTSearch from "youtube-api-search";
import "./index.css";
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
		}

		this.searchVideo("titanic");
	}

	searchVideo = (term) => {
		YTSearch({ key: API_KEY, term: term }, videos => {
			this.setState({
				videos,
				selectedVideo: videos[0]
			})
		});
	}

	render() {
		const searchVideo = _.debounce((term) => {this.searchVideo(term)}, 300);

		return (
			<div className="container">
				<SearchBar onInputChange={searchVideo} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					videos={this.state.videos}
					onSelectVideo={selectedVideo => this.setState({ selectedVideo })} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));