import React from "react";
import check from "/check.png";

const IncludedItem = ({ data }) => {
  return (
    <div className="included_item">
      <img src={check} width={"30px"} alt="" />
      <p>{data}</p>
    </div>
  );
};

export default IncludedItem;
