import React from 'react';

import CommentDetails from './CommentDetails';
import DevideHeader from '../../common/DevideHeader';

const COMMENTS = [
  {id: 1, author: 'D2', created_at: 'Today at 9:00 AM', content: 'Very nice post!'},
  {id: 2, author: 'DUNG NGUYEN', created_at: 'Today at 9:00 AM', content: 'Nice post!'},
  {id: 3, author: 'THUY DUONG', created_at: 'Today at 10:00AM', content: 'Awesome post!'},
  {id: 4, author: 'ANH DUY', created_at: 'Today at 11:00AM', content: "That's helpful!"}
];

const RIKKEI_POST = "https://forum.rikkei.vn/index.php?threads/comunicating-with-props.10/";

const ComponentsDemo = () => {
  return (
    <div className="ui container comments">
      <DevideHeader post_path={RIKKEI_POST} />
      {
        COMMENTS.map(comment => <CommentDetails {...comment} key={comment.id} />)
      }
    </div>
  );
}

export default ComponentsDemo;
