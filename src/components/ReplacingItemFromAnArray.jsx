import { useState } from "react";

const ReplacingItemFromAnArray = () => {
  const [counter, setCounter] = useState([0, 0, 0]);
  const handleCounter = (index) => {
    const incrementedCounter = counter.map((c, i) => {
      if (i == index) {
        return c + 1;
      } else {
        return c;
      }
    });

    setCounter(incrementedCounter);
  };
  return (
    <div>
      <ul>
        {counter.map((c, i) => (
          <li key={i}>
            {c}
            <button
              onClick={() => {
                handleCounter(i);
              }}
            >
              increment
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReplacingItemFromAnArray;
