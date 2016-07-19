import React from 'react';

// curly braces in the argument turns the video property of the param into a variable
const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div clasName="media-left">
          <img src={imageUrl} className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
    );
};

export default VideoListItem;