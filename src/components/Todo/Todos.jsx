import React, { useState } from "react";

let nextId = 0;
const Todos = () => {
  const [todo, setTodo] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingTodo, setEditingTodo] = useState("");
  const handleCreateTodo = () => {
    setTaskList([...taskList, { id: nextId++, todo: todo }]);
    setTodo("");
  };
  const handleDeleteTodo = (id) => {
    let updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
  };
  const handleUpdateTodo = (id) => {
    const updatedTaskList = taskList.map((task) =>
      task.id == id ? { ...task, id: id, todo: editingTodo } : task
    );
    setTaskList(updatedTaskList);
    setEditingId(null);
    setEditingTodo("");
  };
  return (
    <div>
      <label htmlFor="todo">Create task list</label>
      <input
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={handleCreateTodo}>Create</button>

      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            {editingId === task?.id ? (
              <>
                <input
                  type="text"
                  value={editingTodo}
                  onChange={(e) => {
                    setEditingTodo(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    handleUpdateTodo(task.id);
                  }}
                >
                  update
                </button>
                <button
                  onClick={() => {
                    setEditingId(null);
                  }}
                >
                  cancel
                </button>
              </>
            ) : (
              <>
                {task.todo}
                <button
                  onClick={() => {
                    setEditingId(task.id);
                    setEditingTodo(task.todo);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    handleDeleteTodo(task.id);
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
