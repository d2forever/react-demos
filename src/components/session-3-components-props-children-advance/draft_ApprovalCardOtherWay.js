import React, { useEffect, useState, useRef } from 'react';

const ApprovalCard = props => {
  const approvalCardRef = useRef();
  const [childrens, setChildrens] = useState();
  const onChangeColor = changeto => {
    approvalCardRef.current.style.backgroundColor = changeto;
  }

  useEffect(() => {
    let childrens = React.Children.map(props.bottom, child => {
      if(Array.isArray(child.props.children)) {
        let sub_childs = React.Children.map(child.props.children, sub_child => {
          return React.cloneElement(sub_child, {
            onClick: () => onChangeColor(sub_child.props.changeto)
          })
        });

        return React.cloneElement(child, {...{children: sub_childs}});
      } else {
        return React.cloneElement(child, {
            onClick: () => onChangeColor(child.props.changeto)
        });
      }
    });

    setChildrens(childrens);
  }, []);

  return (
    <div className="ui card" ref={approvalCardRef}>
      <div className="content">{props.children}</div>
      <div className="extra content">
        {childrens}
      </div>
    </div>
  );
}

export default ApprovalCard;
