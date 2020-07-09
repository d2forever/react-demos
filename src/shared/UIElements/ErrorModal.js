import React from 'react';

import Modal from './Modal';

const ErrorModal = props => {
  const isShow = () => {
    if(Array.isArray(props.errors)) {
      return !!props.errors.length;
    } else {
      return !!props.errors;
    }
  }

  const renderErrors = () => {
    if(Array.isArray(props.errors)) {
      return (
        <div className="ui bulleted list">
          {props.errors.map(error => (
            <div className="item" key={error}>{error}</div>
          ))}
        </div>
      );
    } else {
      return <p>{props.errors}</p>
    }
  }

  return (
    <Modal
      onCancel={props.onCancel}
      header="An error occured!"
      show={isShow}
      footer={
        <div className="ui negative button" onClick={props.onCancel}>OK</div>
      }
    >
      {renderErrors()}
    </Modal>
  );
}

export default ErrorModal;
