import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({videos, onSelectVideoHandler}) => {

  const renderList = videos.map(video => {
    return <VideoItem
      video={video}
      key={video.id.videoId}
      onSelectVideoHandler={onSelectVideoHandler}
    />
  });

  return (
    <div className="ui relaxed divided list">{renderList}</div>
  );
}

export default VideoList;
