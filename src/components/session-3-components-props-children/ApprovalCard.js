import React from 'react';

const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        {props.bottom}
      </div>
    </div>
  );
}

export default ApprovalCard;
