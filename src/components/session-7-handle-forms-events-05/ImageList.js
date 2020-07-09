import React from 'react';

import './ImageList.css';

const ImageList = props => {
  return (
    <div className="custom__row">
      {props.images.map(image => (
        <div className="custom__column" key={image.id}>
          <img
            className="custom__image"
            alt={image.description}
            src={image.urls.small}
          />
        </div>
      ))}
    </div>
  )
}

export default ImageList;
