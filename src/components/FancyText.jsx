import React from "react";

const FancyText = ({ title, text }) => {
  return title ? (
    <h1 className="fancy title">{text}</h1>
  ) : (
    <h1 className="fancy cursive">{text}</h1>
  );
};

export default FancyText;
