import React, { useReducer, useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { taskReducerAdvanced } from "../../reducers/taskReducerAdvanced";
import html2canvas from "html2canvas";
import ConfirmationModal from "./ConfirmationModal";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const TaskAppAdvanced = () => {
  const [tasks, dispatch] = useReducer(taskReducerAdvanced, [], () => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });

  const [filter, setFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);

  const handleAddTask = (task) => {
    setLoading(true);
    setTimeout(() => {
      dispatch({ type: "added", id: Date.now(), ...task });
      setLoading(false);
    }, 500);
  };

  const handleUpdateTask = (task) => {
    dispatch({ type: "changed", task });
  };

  const handleDeleteTask = (taskId) => {
    setConfirmAction(() => () => dispatch({ type: "deleted", id: taskId }));
    setShowConfirmModal(true);
  };

  const handleDeleteAllTasks = () => {
    setConfirmAction(() => () => dispatch({ type: "deleteAll" }));
    setShowConfirmModal(true);
  };

  const handleDeleteSelectedTasks = () => {
    setConfirmAction(() => () => dispatch({ type: "deleteSelected" }));
    setShowConfirmModal(true);
  };

  const handleSaveAsImage = () => {
    html2canvas(document.querySelector("#task-list")).then((canvas) => {
      const link = document.createElement("a");
      link.download = "tasks.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    dispatch({
      type: "reordered",
      source: result.source.index,
      destination: result.destination.index,
    });
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all" && selectedCategory === "") return true;
    if (
      filter === "completed" &&
      task.done &&
      (selectedCategory === "" || task.category === selectedCategory)
    )
      return true;
    if (
      filter === "notCompleted" &&
      !task.done &&
      (selectedCategory === "" || task.category === selectedCategory)
    )
      return true;
    if (filter === "all" && task.category === selectedCategory) return true;
    return false;
  });

  const categories = [...new Set(tasks.map((task) => task.category))];

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container-fluid bg-light min-vh-100">
        <div className="row">
          <div className="col-md-3 bg-dark text-light p-4">
            <h2 className="mb-4">Task Manager</h2>
            <div className="mb-4">
              <h5>Categories</h5>
              <ul className="list-group">
                <li
                  className={`list-group-item list-group-item-action ${
                    selectedCategory === "" ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory("")}
                >
                  All Categories
                </li>
                {categories.map((cat, index) => (
                  <li
                    key={index}
                    className={`list-group-item list-group-item-action ${
                      selectedCategory === cat ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-9 p-4">
            <h1 className="mb-4">Tasks</h1>
            <AddTask onAddTask={handleAddTask} />
            <div className="d-flex justify-content-between my-4">
              <div className="btn-group" role="group">
                <button
                  className={`btn btn-outline-primary ${
                    filter === "all" ? "active" : ""
                  }`}
                  onClick={() => setFilter("all")}
                >
                  <i className="fas fa-tasks me-2"></i> All
                </button>
                <button
                  className={`btn btn-outline-primary ${
                    filter === "completed" ? "active" : ""
                  }`}
                  onClick={() => setFilter("completed")}
                >
                  <i className="fas fa-check me-2"></i> Completed
                </button>
                <button
                  className={`btn btn-outline-primary ${
                    filter === "notCompleted" ? "active" : ""
                  }`}
                  onClick={() => setFilter("notCompleted")}
                >
                  <i className="fas fa-times me-2"></i> Not Completed
                </button>
              </div>
              <div>
                <button
                  className="btn btn-danger me-2"
                  onClick={handleDeleteSelectedTasks}
                >
                  <i className="fas fa-trash-alt me-2"></i> Delete Selected
                </button>
                <button
                  className="btn btn-danger me-2"
                  onClick={handleDeleteAllTasks}
                >
                  <i className="fas fa-trash me-2"></i> Delete All
                </button>
                <button className="btn btn-success" onClick={handleSaveAsImage}>
                  <i className="fas fa-save me-2"></i> Save as Image
                </button>
              </div>
            </div>
            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}
            <Droppable droppableId="tasks">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  id="task-list"
                >
                  <TaskList
                    tasks={filteredTasks}
                    onChangeTask={handleUpdateTask}
                    onDeleteTask={handleDeleteTask}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </div>
      <ConfirmationModal
        show={showConfirmModal}
        onHide={() => setShowConfirmModal(false)}
        onConfirm={() => {
          confirmAction();
          setShowConfirmModal(false);
        }}
        message="Are you sure you want to delete this task(s)?"
      />
    </DragDropContext>
  );
};

export default TaskAppAdvanced;
