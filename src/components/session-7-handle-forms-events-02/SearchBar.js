import React from 'react';

class SearchBar extends React.Component {
  state = { searchTerm: '' };

  onSearchHandler = event => {
    this.setState({ searchTerm: event.target.value });
  };

  onSubmitHandler = event => {
    event.preventDefault();

    this.props.onSearchSubmitHandler(this.state.searchTerm);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmitHandler} className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              placeholder="Search your favorite image..."
              onChange={this.onSearchHandler}
              value={this.state.searchTerm}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
