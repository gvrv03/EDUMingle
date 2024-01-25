"use client";
import React from "react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["ZIP", "RAR"];
const ImageTypes = ["JPEG", "SVG", "WEBP", "PNG","JPG"];

const Media = ({ setproductByte, setimagesByte, setthumbnailByte }) => {
  // ------------------- preview -------------------
  const [productPreview, setproductPreview] = useState([]);
  const [imagesPreview, setimagesPreview] = useState([]);
  const [thumbnailPreview, setthumbnailPreview] = useState([]);
  const handleFilePreview = (files, setPreviewImages) => {
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
              preview: reader.result,
            });

            if (newFiles.length + invalidFiles.length === files.length) {
              // All files processed
              setPreviewImages(newFiles.map((f) => f.preview));

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
    <div className="      bg-white">
      <label className="font-semibold text-gray-500">
        <i className="uil font-bold  pColor rounded-full mr-2  uil-image" />
        Media
      </label>
      <div className="gap-5 grid grid-cols-1 lg:grid-cols-3 rounded-md mt-2">
        <div className=" flex gap-2 flex-col">
          <label className="text-sm font-bold  text-gray-600">Images</label>
          <FileUploader
            multiple={true}
            handleChange={(file) => {
              setimagesByte(file);
              handleFilePreview(file, setimagesPreview);
            }}
            name="productImg"
            types={ImageTypes}
          />
        </div>
        <div className=" flex gap-2 flex-col">
          <label className="text-sm font-bold  text-gray-600">Thumbnail</label>
          <FileUploader
            multiple={false}
            handleChange={(file) => {
              setthumbnailByte({ file: file, name: file.name });
              handleFilePreview([file], setthumbnailPreview);
            }}
            name="productThumbnail"
            types={ImageTypes}
          />
        </div>
        <div className=" flex gap-2 flex-col">
          <label className="text-sm font-bold  text-gray-600">Product</label>
          <FileUploader
            multiple={false}
            handleChange={(file) => {
              setproductByte({ file: file, name: file.name });
              handleFilePreview(file, setproductPreview);
            }}
            name="file"
            types={fileTypes}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="    bg-gray-50   w-full items-center flex justify-between flex-col rounded-md p-5 mt-5">
          <label className="text-sm font-bold text-blue-600 mb-5">
            Thumbnail
          </label>
          {!thumbnailPreview && (
            <div className="w-full  text-sm text-center py-2">N/A</div>
          )}

          {thumbnailPreview?.map((image, index) => {
            return <img key={index} src={image} className="w-20" alt="" />;
          })}
        </div>
        <div className="    bg-gray-50   w-full items-center  flex  flex-col rounded-md p-5 mt-5">
          <label className="text-sm font-bold  text-blue-600 mb-5">
            Images
          </label>
          <div className="flex flex-wrap gap-5">
            {!imagesPreview && (
              <div className="w-full  text-sm text-center py-2">N/A</div>
            )}

            {imagesPreview?.map((image, index) => {
              return <img key={index} src={image} className="w-20" alt="" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
