import React, { useState } from "react";

const NestedObject = () => {
  const [person, setPerson] = useState({
    firstName: "Harjeet",
    lastName: "Singh",
    email: "harjeet12@gmail.com",
    address: {
      street: "main-street",
      village: "hjhj",
    },
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setPerson({
      ...person,
      [name]: value,
      address: {
        ...person.address,
        [name]: value,
      },
    });
  };
  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          name="firstName"
          onChange={handleFormChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          name="lastName"
          onChange={handleFormChange}
        />
      </label>
      <label>
        Email:
        <input value={person.email} name="email" onChange={handleFormChange} />
      </label>
      <label>
        Street:
        <input
          value={person.address.street}
          name="street"
          onChange={handleFormChange}
        />
      </label>
      <label>
        Village:
        <input
          value={person.address.village}
          name="village"
          onChange={handleFormChange}
        />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
};

export default NestedObject;
