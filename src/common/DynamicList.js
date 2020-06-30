import React from 'react';
import { Link } from 'react-router-dom';

const DynamicList = props => {
  const { lesson } = props;

  return (
    <div className="item">
      <i className="folder icon"></i>
      <div className="content">
        <div className="header">
          {props.isParent ? lesson.title : <Link to={lesson.path}>{lesson.title}</Link>}
        </div>
        <div className="description">{lesson.description}</div>
      </div>
      {props.isParent && <div className="list">{props.children}</div>}
    </div>
  )
}

export default DynamicList;
