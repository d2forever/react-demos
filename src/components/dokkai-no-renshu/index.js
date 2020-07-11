import React from 'react';

const ThemeContext = React.createContext('light');

class Renshuu extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <div>{this.context}</div>;
  }
}

export default Renshuu;
