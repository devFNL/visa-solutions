import React from "react";

const RequirementElement = ({ img, title, data }) => {
  return (
    <li className="requirement_element">
      <img src={img} alt={title} />
      <div className="requirement_text">
        <h2>{title}</h2>
        <p>{data}</p>
      </div>
    </li>
  );
};

export default RequirementElement;
