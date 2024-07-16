import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});

  const onDrop = useCallback((acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  const validateForm = () => {
    const newErrors = {};
    if (!task.trim()) newErrors.task = "Task description is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      onAddTask({
        text: task,
        category,
        images: images.map((img) => img.preview),
      });
      setTask("");
      setCategory("");
      setImages([]);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Add New Task</h5>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Task Description
          </label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className={`form-control ${errors.task ? "is-invalid" : ""}`}
            id="task"
            placeholder="Enter task description"
          />
          {errors.task && <div className="invalid-feedback">{errors.task}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
            id="category"
            placeholder="Enter task category"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload Images</label>
          <div
            {...getRootProps()}
            className={`dropzone ${
              isDragActive ? "border-primary" : ""
            } border rounded p-3 text-center`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the images here ...</p>
            ) : (
              <p>Drag 'n' drop some images here, or click to select files</p>
            )}
          </div>
        </div>
        {images.length > 0 && (
          <div className="mb-3">
            <h6>Image Previews:</h6>
            <div className="d-flex flex-wrap">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.preview}
                  alt={`Preview${index}`}
                  className="img-thumbnail me-2 mb-2"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              ))}
            </div>
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          <i className="fas fa-plus me-2"></i> Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTask;