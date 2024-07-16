import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  return (
    <div>
      <label htmlFor="task">Enter new Task</label>
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onAddTask(task);
          setTask("");
        }}
      >
        add
      </button>
    </div>
  );
};

export default AddTask;
