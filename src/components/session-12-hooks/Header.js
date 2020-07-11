import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ url }) => {
  return (
    <div className="ui secondary pointing menu">
      <Link to={`${url}`} className="item">
        Accordion
      </Link>
      <Link to={`${url}/list`} className="item">
        Search
      </Link>
      <Link to={`${url}/dropdown`} className="item">
        Dropdown
      </Link>
      <Link to={`${url}/translate`} className="item">
        Translate
      </Link>
    </div>
  );
}

export default Header;
