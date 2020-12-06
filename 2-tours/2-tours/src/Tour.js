import React, { useState } from 'react';

const Tour = ({ id, price, info, image, name, handleDelete }) => {

  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt="name"/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {showInfo ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? "show less" : "read more"}
          </button>
        </p>
        <button className="btn delete-btn" onClick={() => handleDelete(id)}>
          no interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
