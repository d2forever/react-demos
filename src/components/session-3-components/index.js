import React from 'react';

import CommentDetails from './CommentDetails';
import DevideHeader from '../../common/DevideHeader';

const COMMENTS = [
  {id: 1, author: 'D2', created_at: 'Today at 9:00 AM', content: 'Very nice post!'},
  {id: 2, author: 'DUNG NGUYEN', created_at: 'Today at 9:00 AM', content: 'Nice post!'},
  {id: 3, author: 'THUY DUONG', created_at: 'Today at 10:00AM', content: 'Awesome post!'},
  {id: 4, author: 'ANH DUY', created_at: 'Today at 11:00AM', content: "That's helpful!"}
];

const ComponentsDemo = () => {
  return (
    <div className="ui container comments">
      <DevideHeader />
      {
        COMMENTS.map(comment => (
            <CommentDetails
              key={comment.id}
              author={comment.author}
              created_at={comment.created_at}
              content={comment.content}
            />
          )
        )
      }
    </div>
  );
}

export default ComponentsDemo;
