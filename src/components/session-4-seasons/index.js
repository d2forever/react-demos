import React from 'react';

import SeasonDisplay from './SeasonDisplay';
import Spinner from '../../common/Spinner';

class Seasons extends React.Component {
  state = {latitude: null, longitude: null, errorMsg: null, isLoading: true};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        isLoading: false
      }),
      err => this.setState({errorMsg: err.message, isLoading: false})
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading && <Spinner />}
        <div className="ui container comments">
          {!this.state.isLoading && this.state.errorMsg && <p>{this.state.errorMsg}</p>}
          {!this.state.isLoading && !this.state.errorMsg && (
            <SeasonDisplay
              lat={this.state.latitude}
              long={this.state.longitude}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Seasons;
