import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = () => {
  const [files, setFiles] = useState([]);
  // use callback is to remember the fn.
  // Object.assign() method is used to copy all propeties from source  to target.
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    setFiles((prevFiles) => [
      ...prevFiles,
      ...acceptedFiles.map((file) =>
        Object.assign(file, {
          // createObjectUrl is the static method of the url interfcace.
          //It crates a string containing the url of the object in the given parameter.
          preview: URL.createObjectURL(file),
        })
      ),
    ]);
  });
  // It takes onDrop fn & returns object with  various properties & methods.
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 1024 * 1024 * 5,
  });
  return (
    <div {...getRootProps()} style={dropzoneStyles}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}

      <div style={previewsContainer}>
        {files.map((file, index) => (
          <div key={file.name} style={previewItem}>
            <img src={file.preview} style={previewImage} alt={file.name} />
            <button></button>
          </div>
        ))}
      </div>
    </div>
  );
};

const dropzoneStyles = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

const previewsContainer = {
  display: "flex",
  flexWrap: "wrap",
  marginTop: "16px",
};

const previewItem = {
  display: "inline-flex",
  flexDirection: "column",
  margin: "8px",
};

const previewImage = {
  width: "100px",
  height: "100px",
  objectFit: "cover",
};

export default Dropzone;
