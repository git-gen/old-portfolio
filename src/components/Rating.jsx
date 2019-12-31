import React from 'react';
import './../App.css';

const Rating = (props) => {

  switch (props.rate) {
    case 1:
      return (
        <div>
          <div className="rating-star" />
        </div>
      );
      break;

    case 2:
      return (
        <div>
          <div className="rating-star" />
          <div className="rating-star" />
        </div>
      );
      break;

    case 3:
      return (
        <div>
          <div className="rating-star" />
          <div className="rating-star" />
          <div className="rating-star" />
        </div>
      );
      break;

    default:
      break;
  }
}

export default Rating
