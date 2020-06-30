import React from 'react';
import { Link } from 'react-router-dom';

const DynamicList = ({ post }) => {
  const renderPostList = post => {
    if(post.subPosts) {
      return (
        <div className="item">
          <a href="#">{post.title}</a>
          <div className="list">
            {post.subPosts.map(subPost => renderPostList(subPost))}
          </div>
        </div>
      )
    } else {
      return <Link className="item" to={post.path} key={post.title}>{post.title}</Link>;
    }
  }

  return renderPostList(post);
}

export default DynamicList;
