import React, { useReducer, useEffect } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { taskReducer } from "../../reducers/taskReducer";
const TaskAppReducer = () => {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });

  const handleAddTask = (task) => {
    // setTasks([...tasks, { id: nextId++, text: task, done: false }]);  // without reducer
    dispatch({ type: "added", id: Date.now(), text: task }); // using reducer
  };
  const handleUpdateTask = (task) => {
    // const newTasks = tasks.map((t) => (t.id == task.id ? task : t));
    // setTasks(newTasks);
    dispatch({ type: "changed", task: task });
  };

  const handleDeleteTask = (taskId) => {
    // setTasks(tasks.filter((t) => t.id == taskId));
    dispatch({ type: "deleted", id: taskId });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
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

export default TaskAppReducer;

let nextId = 3;

// diff b/w useState & useReducer

// use reduer uses dispatch method to dispatch action objects. & use state uses setter fn to set state.
// use state only takes one arg of initial state but use reducer takes reducerfn as well as initialState.

//  we have encountered with words like action & reducer fn . what exactly are these things?

// action object=> It is a plain js object having type & data inside it.
// reducer fn => It is pure js fn without any side effects having two params first is state & second is
// action object.
