import React from 'react';

import CommentDetails from '../session-3-components/CommentDetails';
import DevideHeader from '../../common/DevideHeader';
import ApprovalCard from './ApprovalCard';

const COMMENTS = [
  {id: 1, author: 'D2', created_at: 'Today at 9:00 AM', content: 'Very nice post!'},
  {id: 2, author: 'DUNG NGUYEN', created_at: 'Today at 9:00 AM', content: 'Nice post!'},
  {id: 3, author: 'THUY DUONG', created_at: 'Today at 10:00AM', content: 'Awesome post!'},
  {id: 4, author: 'ANH DUY', created_at: 'Today at 11:00AM', content: "That's helpful!"}
];
const RIKKEI_POST = "https://forum.rikkei.vn/index.php?threads/props-children-and-dynamic-components.12";

const ComponentsDemo = () => {
  return (
    <div className="ui container comments">
      <DevideHeader post_path={RIKKEI_POST} />
      <ApprovalCard
        bottom={
          <div className="ui buttons">
            <div className="ui basic green button">OK</div>
            <div className="ui basic red button">NO</div>
            <div className="ui basic yellow button">HAVE NO IDEA</div>
          </div>
        }
      >
        <div><strong>VINAHOUSE is the best. Are you agree with it?</strong></div>
      </ApprovalCard>
      <ApprovalCard
        bottom={
          <div className="ui basic green button">
            OKAY. I GOT IT!
          </div>
        }
      >
        <div><strong>Hello! This is a dynamic Content</strong></div>
      </ApprovalCard>
      {
        COMMENTS.map(comment => (
            <ApprovalCard
              key={comment.id}
              bottomm={
                <div className="ui two buttons">
                  <div className="ui basic green button">Approve</div>
                  <div className="ui basic red button">Decline</div>
                </div>
              }
            >
              <CommentDetails
                author={comment.author}
                created_at={comment.created_at}
                content={comment.content}
              />
             </ApprovalCard>
          )
        )
      }
    </div>
  );
}

export default ComponentsDemo;
