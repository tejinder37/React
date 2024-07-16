import React, { useState } from "react";
import { useImmer } from "use-immer";

const Immer = () => {
  const [person, setPerson] = useImmer({
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
    // setPerson({  // without immer
    //   ...person,
    //   [name]: value,
    // });
    setPerson((draft) => {
      // using useImmerHook
      draft[name] = value;
      if (name == "street" || name == "village") {
        draft.address[name] = value;
      }
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
        {person.firstName} {person.lastName} ({person.email}
        {person.address.street} ({person.address.village}))
      </p>
    </>
  );
};

export default Immer;

// useImmer is a hook that is used when we have to update or work with deeply nested state.
// It automatically takes care of creating new object copies for us & provides us a special draft(arg) to
// work with.
