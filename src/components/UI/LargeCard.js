import React from "react";
import "./LargeCard.css";

const LargeCard = (props) => {
  return <div className="large-card">{props.children}</div>;
};

export default LargeCard;
