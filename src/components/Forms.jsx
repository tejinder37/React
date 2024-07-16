import React, { useState } from "react";

const Forms = () => {
  const [person, setPerson] = useState({
    firstName: "Harjeet",
    lastName: "Singh",
    email: "harjeet12@gmail.com",
  });
  const handleFirstNameChange = (e) => {
    setPerson({
      firstName: e.target.value,
      lastName: person.lastName,
      email: person.email,
    });
  };
  const handleLastNameChange = (e) => {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  };
  const handleEmailChange = (e) => {
    setPerson({
        ...person,
        email: e.target.value,
      });
  };
  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
};

export default Forms;
