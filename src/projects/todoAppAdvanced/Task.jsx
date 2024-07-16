import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, onChange, onDelete, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const [newImage, setNewImage] = useState(null);

  const handleSave = () => {
    onChange(editedTask);
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
        setEditedTask((prevTask) => ({
          ...prevTask,
          images: [...prevTask.images, newImage],
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (index) => {
    setEditedTask((prevTask) => ({
      ...prevTask,
      images: prevTask.images.filter((_, i) => i !== index),
    }));
  };

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={editedTask.text}
          onChange={(e) => setEditedTask({ ...editedTask, text: e.target.value })}
          className="form-control mb-2"
        />
        <input
          type="text"
          value={editedTask.category}
          onChange={(e) => setEditedTask({ ...editedTask, category: e.target.value })}
          className="form-control mb-2"
          placeholder="Category"
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="form-control mb-2"
        />
        <button onClick={handleSave} className="btn btn-primary me-2">
          Save
        </button>
        <button onClick={() => setIsEditing(false)} className="btn btn-secondary">
          Cancel
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span className={task.done ? 'text-decoration-line-through' : ''}>{task.text}</span>
        <span className="badge bg-info ms-2">{task.category}</span>
        <button
          onClick={() => setIsEditing(true)}
          className="btn btn-sm btn-outline-primary ms-2"
        >
          <i className="fas fa-edit me-1"></i> Edit
        </button>
      </>
    );
  }

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="list-group-item"
        >
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              checked={task.done}
              onChange={(e) => onChange({ ...task, done: e.target.checked })}
              className="form-check-input me-3"
            />
            <div className="flex-grow-1">{taskContent}</div>
            <button
              onClick={() => onDelete(task.id)}
              className="btn btn-sm btn-outline-danger ms-2"
            >
              <i className="fas fa-trash me-1"></i> Delete
            </button>
          </div>
          {task.images && task.images.length > 0 && (
            <div className="mt-3">
              <h6>Attachments:</h6>
              <div className="d-flex flex-wrap">
                {task.images.map((image, index) => (
                  <div key={index} className="position-relative me-2 mb-2">
                    <img
                      src={image}
                      alt={`Task image ${index}`}
                      className="img-thumbnail"
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                    {isEditing && (
                      <button
                        className="btn btn-sm btn-danger position-absolute top-0 end-0"
                        onClick={() => handleDeleteImage(index)}
                      >
                        X
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </li>
      )}
    </Draggable>
  );
};

export default Task;