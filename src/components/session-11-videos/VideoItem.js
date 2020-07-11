import React from 'react';
import './VideoItem.css';

const VideoItem = ({ onSelectVideoHandler, video }) => {
  return (
    <div className="video-item item" onClick={() => onSelectVideoHandler(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="video"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
