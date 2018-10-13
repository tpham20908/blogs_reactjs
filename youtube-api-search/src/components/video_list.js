import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = ({ videos, onSelectVideo }) => {
  const videoList = videos.map(video => (
    <VideoListItem
      key={video.etag}
      video={video}
      onSelectVideo={onSelectVideo} />
  ));

  return (
    <ul className="col-md-4 list-group">
      {videoList}
    </ul>
  )
}

export default VideoList;