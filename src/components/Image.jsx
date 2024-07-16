import React, { useState } from "react";
import { sculptureList } from "../helpers/data";

const Image = () => {
  const [index, setIndex] = useState(0); // hook => special(pre defined ) use state takes inital state.
  const [showDetails, setShowDetails] = useState(false);
  const sculpture = sculptureList[index];
  const hasNext = index < sculptureList.length - 1;
  const handleShowDetails = () => {
    setShowDetails(!showDetails); // negate (if show then hide if hide then show)
  };
  const handleClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ( {index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleShowDetails}>
        {showDetails ? "hide" : "show"} details
      </button>

      {showDetails && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
};

export default Image;

// types of hooks

// 1. state hooks  => useState() , useReducer(). 40% redux
// 2. // context hooks => useContext();  context means entire app or particular context
// 3. sideEffect hooks => useEffect() => to perform sideeffect. always pure.
// 4. memoization/performance hooks => useMemo() & useCallback()

// useMemo() => used for memoization.


// component stages=> 
    // 1. Trigger
    // 2. render
    // 3. Committing
