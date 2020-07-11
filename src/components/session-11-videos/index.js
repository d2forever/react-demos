import React from 'react';

import DevideHeader from '../../common/DevideHeader';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../../shared/api/youtube';

const RIKKEI_POST = "/";
const YOUTUBE_API_V3_KEY = 'AIzaSyAcdJfJ0BbL_Vqk_zgosvWt7q6I6ywjkgM';

class Videos extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmitHandler('vinahouse');
  }

  onSearchSubmitHandler = async searchTerm => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm,
        part: 'snippet',
        type: 'video',
        key: YOUTUBE_API_V3_KEY
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onSelectVideoHandler = selectedVideo => {
    this.setState({ selectedVideo: selectedVideo });
  }

  render() {
    return (
      <div className="ui container comments">
        <DevideHeader post_path={RIKKEI_POST} />
        <SearchBar onSearchSubmitHandler={this.onSearchSubmitHandler} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onSelectVideoHandler={this.onSelectVideoHandler} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
