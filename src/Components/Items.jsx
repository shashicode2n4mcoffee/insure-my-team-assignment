import React from 'react';
import "./Items.css"

const Items = ({ singleItem }) => {
  return (
    <div className="items">
      <h2>{singleItem.title}</h2>
      <p>{singleItem.body}</p>
    </div>
  );
};

export default Items;
