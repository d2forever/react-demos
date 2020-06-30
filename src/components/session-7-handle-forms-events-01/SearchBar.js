import React from 'react';

class SearchBar extends React.Component {
  state = { searchTerm: '' };

  onSearchHandler = event => {
    this.setState({ searchTerm: event.target.value.toUpperCase() });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              placeholder="Search your favorite image..."
              onChange={this.onSearchHandler}
              value={this.state.searchTerm}
            />
          </div>
          <div>
            <p>What we typed: {this.state.searchTerm}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
