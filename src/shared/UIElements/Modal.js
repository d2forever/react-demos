import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  const backdropRef = useRef();

  useEffect(() => {
    backdropRef.current.style.setProperty('display', 'flex', 'important');
  }, [props.show]);

  const content = (
    <div
      className={`ui dimmer modals page transition ${props.show && "visible active"}`}
      ref={backdropRef}
      onClick={props.onCancel}
    >
      <div className={`ui small test modal transition ${props.show && "visible active"}`}>
        <div className="header">
          {props.header}
        </div>
        <div className="content">
          {props.children}
        </div>
        <div className="actions">
          {props.footer}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
}

export default Modal;
