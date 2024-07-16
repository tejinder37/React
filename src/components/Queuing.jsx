import React, { useState } from "react";

const Queuing = () => {
  const [score, setScore] = useState(0);
  return (
    <div>
      <h1>{score}</h1>
      <button
        onClick={() => {
          setScore(score + 1);
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          setScore((score) => score + 1); // using  updaterfn fn to queuing a series of updates.
          setScore((score) => score + 1);
          setScore((score) => score + 1);
        }}
      >
        +3
      </button>
    </div>
  );
};

export default Queuing;
