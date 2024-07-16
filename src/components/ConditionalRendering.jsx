import React from "react";

const ConditionalRendering = ({ name }) => {
  return (
    <div>
      {name?.length > 0 ? (
        <>
          <h1>Hello, {name}!</h1>
        </>
      ) : (
        <>
          <h1>Hello User!</h1>
        </>
      )}
    </div>
  );
};

export default ConditionalRendering;
