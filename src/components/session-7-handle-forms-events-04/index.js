import React from 'react';

import DevideHeader from '../../common/DevideHeader';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../../shared/api/unplash';

const RIKKEI_POST = "https://forum.rikkei.vn/index.php?threads/react-basic-handle-user-input-with-state-and-events-part-04.22";

class HandleFormsEvents extends React.Component {
  state = { images: [] };

  onSearchSubmitHandler = async searchTerm => {
    const response = await unsplash.get('/search/photos', {
      params: { query: searchTerm }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container comments">
        <DevideHeader post_path={RIKKEI_POST} />
        <SearchBar onSearchSubmitHandler={this.onSearchSubmitHandler} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default HandleFormsEvents;
