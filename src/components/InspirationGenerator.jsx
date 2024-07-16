import React, { useState } from "react";
import FancyText from "./FancyText";
import quotes from "../helpers/quotes";

const InspirationGenerator = ({ children }) => {
  const [index, setIndex] = useState(0);  // hooks 
  const quote = quotes[index];
  const next = () => {
    setIndex((index + 1) % quotes.length);
  };

  return (
    <div>
      <FancyText text={quote} />
      <button onClick={next}>Get new quote</button>
      {children}
    </div>
  );
};

export default InspirationGenerator;
