import React, {Component} from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {

    // key allows react to update just an affected item and not the whole list
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;