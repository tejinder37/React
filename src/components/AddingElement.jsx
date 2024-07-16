import { useState } from "react";

let nextId = 0;
const AddingElement = () => {
  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");

  const handleDelete = (id) => {
    const filteredFriends = friends.filter((f) => f.id !== id);
    setFriends(filteredFriends);
  };

  // const handleClick = () => {
  //   const insertAt = 1; // Could be any index
  //   const nextArtists = [
  //     ...friends.slice(0, insertAt),
  //     { id: nextId++, name: name },
  //     ...friends.slice(insertAt),
  //   ];
  //   setFriends(nextArtists);
  // };

  const handleUpdate = (id) => {
    const updatedFriends = friends.map((friend) =>
      friend.id === id ? { ...friend, name: editingName } : friend
    );
    setFriends(updatedFriends);
    setEditingId(null); // Reset editing state
    setEditingName("");
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
        placeholder="Add friend name..."
        required
      />
      <button
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        onClick={() => {
          setFriends([...friends, { id: nextId++, name: name }]);
          setName("");
        }}
      >
        Add
      </button>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            {editingId === friend.id ? (
              <>
                <input
                  type="text"
                  onChange={(e) => setEditingName(e.target.value)}
                  value={editingName}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  placeholder="Edit friend name..."
                  required
                />
                <button
                  className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                  onClick={() => handleUpdate(friend.id)}
                >
                  Save
                </button>
                <button
                  className="focus:outline-none text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                {friend.name}
                <button
                  className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                  onClick={() => {
                    setEditingId(friend.id);
                    setEditingName(friend.name);
                  }}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                  onClick={() => handleDelete(friend.id)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AddingElement;
