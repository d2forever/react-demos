import React from 'react';
import { Link } from 'react-router-dom';

const DevideHeader = ({ post_path, root_path, content }) => {
  return (
    <div className="ui attached stackable menu">
      <div className="ui container">
        <Link to="/" className="item">
          <i className="home icon"></i>{content}
        </Link>
        {
          post_path && (
            <a className="item" href={post_path}>
              <i className="hand point right icon"></i> Post link
            </a>
          )
        }
      </div>
    </div>
  )
}

DevideHeader.defaultProps = {
  root_path: "/",
  content: 'Back to Demo list'
};

export default DevideHeader;
