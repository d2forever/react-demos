import React, { useEffect, useState, useRef, useCallback } from 'react';

const ApprovalCard = props => {
  const approvalCardRef = useRef();
  const [childrens, setChildrens] = useState();
  const [type] = useState('onChangeColor');
  const onChangeColor = element => {
    element.onClick(approvalCardRef, element.color);
  }

  const doSomething = element => {
    element.onClick(approvalCardRef);
  };

  const cloneElement = useCallback(child => {
    if(child.props.onClick === undefined && !Array.isArray(child.props.children)) return child;
    if(Array.isArray(child.props.children)) {
      let sub_childs = React.Children.map(child.props.children, sub_child => cloneElement(sub_child));
      return React.cloneElement(child, {...{children: sub_childs}});
    } else {
      return React.cloneElement(child, {
        onClick: () => eval(type)(child.props)
      });
    }
  }, [type]);

  useEffect(() => {
    let childrens = React.Children.map(props.bottom, child => cloneElement(child));
    setChildrens(childrens);
  }, [props.bottom, cloneElement, type]);

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
