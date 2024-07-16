import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <Droppable droppableId="tasks">
      {(provided) => (
        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="list-group"
        >
          {tasks.map((task, index) => (
            <Task
              key={task.id}
              task={task}
              onChange={onChangeTask}
              onDelete={onDeleteTask}
              index={index}
            />
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default TaskList;
