import React from 'react';
import faker from 'faker';

const CommentDetails = ({ author, created_at, content }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">{author}</a>
        <div className="metadata">
          <span className="date">{created_at}</span>
        </div>
        <div className="text">
          {content}
        </div>
      </div>
    </div>
  );
}

export default CommentDetails;
