import React from 'react';

import DevideHeader from '../../common/DevideHeader';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const RIKKEI_POST = "https://forum.rikkei.vn/index.php?threads/react-basic-handle-user-input-with-state-and-events-part-02.18";

class HandleFormsEvents extends React.Component {
  onSearchSubmitHandler(searchTerm) {
    console.log(searchTerm);
  }

  render() {
    return (
      <div className="ui container comments">
        <DevideHeader post_path={RIKKEI_POST} />
        <SearchBar onSearchSubmitHandler={this.onSearchSubmitHandler} />
        <ImageList />
      </div>
    );
  }
}

export default HandleFormsEvents;
