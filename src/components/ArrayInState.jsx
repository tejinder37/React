import { useState } from "react";
let nextId = 0;
const ArrayInState = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  console.log(users);

  const handleClick = () => {
    // users.push({   // wrong way new user is adding but state is not updating & mutation is being done.
    //   id: nextId++,
    //   name: name,
    // });

    setUsers([...users, { id: nextId++, name: name }]);
    setName("");
  };
  return (
    <div>
      <label htmlFor="name">Enter user name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleClick}>Add</button>
      {
        <ul>
          {users.map((artist) => (
            <li key={artist.id}>
              {artist.name}
              <button
                onClick={() => {
                  setUsers(users.filter((user) => user.id !== artist.id));
                }}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default ArrayInState;
