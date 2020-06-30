import React from 'react';
import { Link } from 'react-router-dom';

const DevideHeader = ({ path = "/", content = 'Back to Demo list' }) => {
  return (
    <h4 className="ui dividing header">
      <Link to={path}>{content}</Link>
    </h4>
  )
}

export default DevideHeader;
