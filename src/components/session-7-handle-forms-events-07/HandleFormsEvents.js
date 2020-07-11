import React from 'react';
import _ from 'lodash';

import DevideHeader from '../../common/DevideHeader';
import SearchBarFrom05 from '../session-7-handle-forms-events-05/SearchBar';
import ImageListFrom05 from '../session-7-handle-forms-events-05/ImageList';
import ErrorModal from '../../shared/UIElements/ErrorModal';

const RIKKEI_POST = "https://forum.rikkei.vn/index.php?threads/react-basic-handle-user-input-with-state-and-events-part-05.23";

class HandleFormsEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = { images: [], ...props };
  }

  componentDidUpdate(prevProps) {
    if(!_.isEqual(prevProps, this.props)) {
      this.setState((prevState, props) => {
        let tmpState = Object.assign({}, prevState);
        return { ...tmpState, ...props }
      });
    }
  }

  onSearchSubmitHandler = async searchTerm => {
    try {
      const response = await this.state.axiosHook.get('/search/photos', {
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
      <React.Fragment>
        {!!this.state.errors.length &&
          <ErrorModal
            errors={this.state.errors}
            show={!!this.state.errors.length}
            onCancel={() => this.setState({ errors: [] })}
          />
        }
        <DevideHeader post_path={RIKKEI_POST} />
        <SearchBarFrom05
          onSearchSubmitHandler={this.onSearchSubmitHandler}
          isLoading={this.state.isLoading}
        />
        <ImageListFrom05 images={this.state.images} />
      </React.Fragment>
    );
  }
}

export default HandleFormsEvents;
