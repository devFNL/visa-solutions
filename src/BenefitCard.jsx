import React from "react";

const BenefitCard = ({ title, img, data }) => {
  return (
    <div className="bene_card">
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <p>{data}</p>
    </div>
  );
};

export default BenefitCard;
