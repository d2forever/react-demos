import React from 'react';

import DevideHeader from '../../common/DevideHeader';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const RIKKEI_POST = "https://forum.rikkei.vn/index.php?threads/react-basic-handle-user-input-with-state-and-events-part-01.17";

class HandleFormsEvents extends React.Component {
  render() {
    return (
      <div className="ui container comments">
        <DevideHeader post_path={RIKKEI_POST} />
        <SearchBar />
        <ImageList />
      </div>
    );
  }
}

export default HandleFormsEvents;
