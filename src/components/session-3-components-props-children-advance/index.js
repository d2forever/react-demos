import React from 'react';

import DevideHeader from '../../common/DevideHeader';
import ApprovalCard from './ApprovalCard';

const RIKKEI_POST = "https://forum.rikkei.vn/index.php?threads/props-children-and-dynamic-components.12";

const ComponentsDemo = () => {
  const onChangeColor = (element, changeTo) => {
    if(element.current.style.backgroundColor === changeTo)
      element.current.style.backgroundColor = '#FFFFFF';
    else element.current.style.backgroundColor = changeTo;
  }

  const doSomething = element => {
    alert(`Clicked to element with className: ${element.current.className}`);
  }

  return (
    <div className="ui container comments">
      <DevideHeader post_path={RIKKEI_POST} />
      <ApprovalCard
        bottom={
          <div className="ui buttons">
            <div className="ui basic green button" color="green" onClick={onChangeColor}>OK</div>
            <div className="ui basic red button" color="red" onClick={onChangeColor}>NO</div>
            <div className="ui basic yellow button" color="yellow" onClick={onChangeColor}>HAVE NO IDEA</div>
          </div>
        }
      >
        <div><strong>VINAHOUSE is the best. Are you agree with it?</strong></div>
      </ApprovalCard>
      <ApprovalCard
        bottom={
          <div className="ui buttons">
            <div className="ui basic blue button" color="blue" onClick={onChangeColor}>COLOR</div>
            <div className="ui basic grey button" onClick={doSomething} type="doSomething">ALERT</div>
          </div>
        }
      >
        <div><strong>Hello! This is a dynamic Content</strong></div>
      </ApprovalCard>
      <ApprovalCard
        bottom={
          <div className="ui basic green button">
            OKAY. I GOT IT!
          </div>
        }
      >
        <div><strong>WITHOUT ANY ONCLICK FUNC()</strong></div>
      </ApprovalCard>
    </div>
  );
}

export default ComponentsDemo;
