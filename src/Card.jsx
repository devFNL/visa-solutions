import React from "react";

const Card = ({ img, number, data }) => {
  return (
    <div className="card">
      <img src={img} alt={data} />
      <h3>{number}</h3>
      <p>{data}</p>
    </div>
  );
};

export default Card;
