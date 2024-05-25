import React from "react";

const Bubble = ({ title, img, data }) => {
  return (
    <div className="bubble">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{data}</p>
    </div>
  );
};

export default Bubble;
