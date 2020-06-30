import React from 'react';
import DevideHeader from './common/DevideHeader';
import DynamicList from './common/DynamicList';

const POSTS = [
  {
    title: 'Comunicate with props',
    subPosts: [
      {title: 'Comunicate with props', path: '/session-3-components'},
      {title: 'Use props children', path: '/session-3-components-props-children'},
      {title: 'Use props children advance', path: '/session-3-components-props-children-advance'},
    ]
  },
  {title: 'Class Component with Seasons app', path: '/session-4-seasons'},
  {
    title: 'Handling User input with Forms and Events',
    subPosts: [
      {title: 'Handle User input with Events and State.', path: '/session-7-forms-events-01'},
      {title: 'Understand about this in func AND invoke callback in Children', path: '/session-7-forms-events-02'},
      {title: 'Use AXIOS to call API and display in ImageList', path: '/session-7-forms-events-03'},
      {title: 'Auto call API when User typing && refactor code', path: '/session-7-forms-events-04'}
    ]
  }
];

const StaticPage = () => {
  return (
    <div className="ui container">
      <DevideHeader content="React demo list" />
      <div className="ui ordered list">
        {POSTS.map(post => <DynamicList post={post} key={post.title} />)}
      </div>
    </div>
  );
}

export default StaticPage;
