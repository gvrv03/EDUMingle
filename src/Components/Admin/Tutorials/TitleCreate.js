"use client";
import DefaultBTN from "@/Components/Utility/DefaultBTN";
import { useTutorial } from "@/Context/UseTutorialContext";
import React from "react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { toast } from "react-hot-toast";
const ImageTypes = ["JPEG", "SVG", "WEBP", "PNG","JPG"];

const TitleCreate = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Imagebyte, setImagebyte] = useState("");

  const [Keywords, setKeywords] = useState("");
  const { createTutorial, handleUploadThumbnail } = useTutorial();
  const [loading, setloading] = useState(false);
  const [FileName, setFileName] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleCreateTitle = async (e) => {
    e.preventDefault();
    setloading(true);
    if (!Title || !Description || !Keywords) {
      setloading(false);
      return toast.error("Fill all the Fields!");
    }

    const data = await handleUploadThumbnail(Imagebyte, Title, FileName);
    await createTutorial({ Title, Description, Keywords, Thumbnail: data });
    setloading(false);
  };

  const handleFilePreview = (files, setPreviewImage) => {
    const maxFileSize = 1 * 1024 * 1024; // 1MB
    if (files.length > 0) {
      const newFiles = [];
      const invalidFiles = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.size > maxFileSize) {
          invalidFiles.push(file.name);
        } else {
          const reader = new FileReader();

          reader.readAsDataURL(file);
          reader.onloadend = () => {
            newFiles.push({
              name: file.name,
              preview: reader.result,
            });

            if (newFiles.length + invalidFiles.length === files.length) {
              // All files processed
              setFileName(newFiles.map((f) => f.name));
              setPreviewImage(newFiles.map((f) => f.preview));

              if (invalidFiles.length > 0) {
                toast.error(
                  `File size exceeds the limit for: ${invalidFiles.join(", ")}`
                );
              }
            }
          };
        }
      }
    }
  };
  return (
    <form className="flex flex-col gap-2  md:gap-5">
      <div className="flex gap-2  md:gap-5">
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className=" p-2 rounded-md w-full border outline-none  "
          placeholder="Ex. How to create database in SQL"
        />
        <DefaultBTN
          btnStyle="pBtn px-10 py-1 rounded-md"
          func={handleCreateTitle}
          loading={loading}
          nameBtn="Create"
        />
      </div>

      <div className="flex   md:flex-row flex-col gap-2  md:gap-5">
        <div className="w-full">
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            placeholder="Description"
            className=" p-2 rounded-md w-full border outline-none  "
          />{" "}
          <textarea
            onChange={(e) => {
              setKeywords(e.target.value);
            }}
            type="text"
            placeholder="Keywords"
            className=" p-2 rounded-md w-full border outline-none  "
          />
        </div>

        <div className="w-full">
          <FileUploader
            multiple={true}
            handleChange={(file) => {
              setImagebyte(file);
              handleFilePreview(file, setPreviewImage);
            }}
            name="productImg"
            types={ImageTypes}
          />

          {previewImage && (
            <div>
              <h6 className="flex items-center gap-2">
                Preview Image:{" "}
                <span className="text-xs pColor font-semibold">
                  {FileName}{" "}
                </span>
              </h6>
              <img src={previewImage} alt={FileName} className="w-40" />
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default TitleCreate;
