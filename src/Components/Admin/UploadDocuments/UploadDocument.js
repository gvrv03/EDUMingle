"use client";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { uploadData } from "./Actions/UploadAction";
import SubmitButton from "./SubmitButton";

const UploadDocument = () => {
  const formRef = useRef();
  const [files, setfiles] = useState([]);

  const handleInputFiles = (e) => {
    const files = e.target.files;
    const newFiles = [...files].filter((file) => {
      if (file.size < 1024 * 1024 && file.type.startsWith("image/")) {
        return file;
      }
    });

    setfiles((prev) => [...newFiles, ...prev]);
    formRef.current.reset();
  };

  const handleDeleteFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setfiles(newFiles);
  };

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!files.length) return alert("No image Selected");

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    const res = await uploadData(formData);
  };

  return (
    <form action="" ref={formRef}>
      <div>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleInputFiles}
        />

        <h5>Preview</h5>
        <div className="flex gap-10 ">
          {files.map((file, index) => {
            return (
              <div key={index}>
                <img
                  key={index}
                  className="w-20 h-32 border p-2 "
                  src={URL.createObjectURL(file)}
                  alt=""
                />

                <button
                  type="button"
                  onClick={() => {
                    handleDeleteFile(index);
                  }}
                  className="border text-sm px-5 bg-red-400 text-white "
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <SubmitButton onClick={handleUpload} value="Upload to Cloudinary" />
    </form>
  );
};

export default UploadDocument;
