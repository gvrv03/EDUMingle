"use client";
import DefaultBTN from "@/Components/Utility/DefaultBTN";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import { uploadData, getImagesfromCloudinary } from "@/API/Upload/uploadFile";

const UploadDocument = () => {
  const formRef = useRef();
  const [files, setfiles] = useState([]);
  const [loading, setloading] = useState(false);

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
    e.preventDefault();
    try {
      setloading(true);
      if (!files?.length) {
        setloading(false);
        return alert("No image Selected");
      }
      const formData = new FormData();
      files?.forEach((file) => {
        formData?.append("files", file);
      });
      const res = await uploadData(formData, "gvrv");
      if (res.msg) {
        toast.success(res.msg);
        setloading(false);
      } else {
        toast.error(res.errorMsg);
        setloading(false);
      }
    } catch (error) {
      toast.error(error.message);
      setloading(false);
    }
  };

  const handleGetImages = async () => {
    const res = await getImagesfromCloudinary();
    console.log(res);
  };
  return (
    <form action="" ref={formRef}>
      <div>
        <input
          accept="image/*"
          multiple
          type="file"
          onChange={handleInputFiles}
          draggable
          className=" text-transparent   md:file:rounded-md md:file:h-36  file:h-16 w-full file:bg-white   file:text-red-400 file:cursor-pointer file:border file:outline-none file:font-semibold file:rounded-md file:w-full file:border-dashed file:border-gray-300 file:px-5 file:py-2 file:mr-2 cursor-pointer "
        />

        <h5 className="mt-5">Preview</h5>
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
      <DefaultBTN
        nameBtn="Upload to Cloudinary"
        func={handleUpload}
        loading={loading}
        btnStyle="border  pBtn rounded-md mt-5 px-10 py-3"
      />
      <button type="button" onClick={handleGetImages} className="mt-10 border">
        Get Image
      </button>
      {/* <CldUploadButton uploadPreset="<Upload Preset>" /> */}
      {/* <SubmitButton funcBtn={handleUpload} value="Upload to Cloudinary" /> */}
    </form>
  );
};

export default UploadDocument;
