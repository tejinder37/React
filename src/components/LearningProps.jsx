import React from "react";

const LearningProps = ({ user }) => {
  return (
    <div>
      Learning about props
      {user && (
        <>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
          <h1>{Object.values(user.address)}</h1>
          <h1>
            {user.hobbies.map((val, index) => (
              <div key={index}>{val}</div>
            ))}
          </h1>
        </>
      )}
      {!user && (
        <>
          <h1>No data found to display</h1>
        </>
      )}
    </div>
  );
};

export default LearningProps;
