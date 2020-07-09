import React from 'react';

import DevideHeader from '../../common/DevideHeader';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import { useCustomAxiosHook } from '../../shared/api/axios-hook';
import ErrorModal from '../../shared/UIElements/ErrorModal';

const RIKKEI_POST = "https://forum.rikkei.vn/index.php?threads/react-basic-handle-user-input-with-state-and-events-part-05.23";
const BASE_URL = 'https://api.unsplash.com';
const AUTHORIZATION = 'Client-ID eWoYQuDqo1n6kl_yCWBwcUlNEbWKs7RrvdmGFuIpC3g';

class HandleFormsEvents extends React.Component {
  state = { images: [], isLoading: false, errors: [] };

  componentDidMount() {
    Object.assign(this, useCustomAxiosHook(this, BASE_URL, AUTHORIZATION));
  }

  setIsLoadingState = isLoading => {
    this.setState({ isLoading: isLoading });
  }

  setErrorsState = errors => {
    this.setState({ errors: errors });
  }

  onSearchSubmitHandler = async searchTerm => {
    try {
      const response = await this.axiosHook.get('/search/photos', {
        params: { query: searchTerm, per_page: 8 }
      });

      if(response.data.results.length === 0 && searchTerm !== '') {
        throw new Error(`Can't found image with keyword '${searchTerm}'. Please try again!`);
      }

      this.setState({ images: response.data.results });
    } catch(err) {
      this.setState({ errors: [err.message] })
    }
  }

  render() {
    return (
      <div className="ui container comments">
        {!!this.state.errors.length &&
          <ErrorModal
            errors={this.state.errors}
            show={!!this.state.errors.length}
            onCancel={() => this.setState({ errors: [] })}
          />
        }
        <DevideHeader post_path={RIKKEI_POST} />
        <SearchBar
          onSearchSubmitHandler={this.onSearchSubmitHandler}
          isLoading={this.state.isLoading}
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default HandleFormsEvents;
