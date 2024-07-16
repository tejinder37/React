import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const TaskApp = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (task) => {
    setTasks([...tasks, { id: nextId++, text: task, done: false }]);
  };
  const handleUpdateTask = (task) => {
    const newTasks = tasks.map((t) => (t.id == task.id ? task : t));
    setTasks(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };
  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default TaskApp;

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
