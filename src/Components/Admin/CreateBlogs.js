"use client";
import TextEditor from "@/Components/Admin/TextEditor";
import { useBlogs } from "@/Context/UseBlogsContext";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BtnSpinnerWhite } from "../LoadingSpinner";
import { Uploader } from "rsuite";
import { useAppStore } from "@/Context/UseStoreContext";
import BlogDetail from "../BlogComp/BlogDetail";

const CreateBlogs = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [artical, setartical] = useState("");
  const [category, setcategory] = useState([]);
  const [keyowrds, setkeyowrds] = useState([]);
  const [title, settitle] = useState("");
  const [imageUrls, setImageUrls] = useState("");
  const [description, setdescription] = useState("");
  const { createBlog } = useBlogs();
  const [cat, setcat] = useState("");
  const [keyW, setkeyW] = useState("");
  const [loading, setloading] = useState(false);
  const { userDetails } = useAppStore();

  const handleCreatePost = async () => {
    setloading(true);
    if (
      !title ||
      !previewImage ||
      !artical ||
      !category ||
      !keyowrds ||
      !description
    ) {
      setloading(false);

      return toast.error("Fill all the Fields !");
    }

    await createBlog({
      title,
      image: previewImage,
      author: userDetails?.User._id,
      artical,
      category,
      keyowrds,
      description,
    });
    setloading(false);
  };

  const addKeywords = (keywo) => {
    setkeyowrds([...keyowrds, keywo]);
  };
  const removeSpecificKeywords = (keywo) => {
    setkeyowrds(keyowrds.filter((currentKeyword) => currentKeyword !== keywo));
  };
  const addCategory = (cate) => {
    setcategory([...category, cate]);
  };
  const removeSpecificCategory = (cate) => {
    setcategory(category.filter((currentCategory) => currentCategory !== cate));
  };
  const [FileName, setFileName] = useState(null);
  const handleFileChange = (fileList) => {
    const file = fileList.target.files[0];
    if (file) {
      setFileName(file.name);
      const maxSize = 1 * 1024 * 1024; // 2MB
      if (file.size > maxSize) {
        return toast.error("File size exceeds the limit of 1MB.");
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
    }
  };
  return (
    <div className="flex-col flex gap-5">
      <div className="flex justify-between border p-2 rounded-full bg-white w-full gap-5 items-center ">
        <input
          type="text"
          onChange={(e) => {
            settitle(e.target.value);
          }}
          className="w-full  outline-none p-2 rounded-sm  px-5 "
          placeholder="Title"
        />
        <div className="flex gap-2">
          <button className="flex gap-2 p-2 outline-none  rounded-full md:px-5 bg-gray-50  items-center font-semibold text-gray-500   border ">
            <span className="text-sm hidden md:block ">Draft</span>
            <i className="uil uil-save  text-xl w-5 h-5 grid place-items-center " />
          </button>{" "}
          {!loading ? (
            <button
              onClick={handleCreatePost}
              className="flex  w-full gap-2 p-2 outline-none  rounded-full md:px-5 bg-red-600  items-center font-semibold text-white   border "
            >
              <span className="text-sm hidden md:block ">Publish</span>
              <i className="uil uil-forward  text-xl w-5 h-5 grid place-items-center " />
            </button>
          ) : (
            <button className="border relative grid place-items-center w-10 rounded-full bg-red-600">
              <BtnSpinnerWhite />
            </button>
          )}
        </div>
      </div>
      <textarea
        placeholder="Description "
        type="text"
        onChange={(e) => {
          setdescription(e.target.value);
        }}
        className=" border p-2 px-5 outline-none   w-full "
      />
      <div className="w-full flex gap-5   flex-col-reverse md:flex-row">
        <TextEditor height="100vh" setartical={setartical} artical={artical} />
        <div className="  flex-col flex gap-5 w-full md:w-[30%] bg-white ">
          {" "}
          <div className="border p-5">
            <h5 className="text-gray-500">Category</h5>
            <div className="flex gap-5 justify-center mt-2 items-center">
              <input
                type="text"
                onChange={(e) => {
                  setcat(e.target.value);
                }}
                value={cat ? cat : ""}
                className="     outline-none  border p-2 text-sm w-full  "
                placeholder="Category"
              />
              <button
                className="pBtn p-2 w-12 "
                disabled={!cat ? true : false}
                onClick={() => {
                  addCategory(cat);
                  setcat("");
                }}
              >
                <i className="bi text-white font-semibold bi-plus-lg" />
              </button>
            </div>

            <div
              className={`mt-5       gap-2  flex-wrap p-2 ${
                category.length === 0 ? "hidden" : "flex"
              }`}
            >
              {category &&
                category.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="text-xs bg-gray-50  rounded-sm p-1 "
                    >
                      {item}{" "}
                      <button
                        className="hover:bg-gray-100   rounded-sm"
                        onClick={() => {
                          removeSpecificCategory(item);
                        }}
                      >
                        <i className="bi bi-x-lg font-bold p-1 " />
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="border p-5">
            <h5 className="text-gray-500">Keywords</h5>
            <div className="flex gap-5 justify-center mt-2 items-center">
              <input
                type="text"
                onChange={(e) => {
                  setkeyW(e.target.value);
                }}
                value={keyW ? keyW : ""}
                className="     outline-none  border p-2 text-sm w-full  "
                placeholder="Keywords"
              />
              <button
                className="pBtn p-2 w-12 "
                disabled={!keyW ? true : false}
                onClick={() => {
                  addKeywords(keyW);
                  setkeyW("");
                }}
              >
                <i className="bi text-white font-semibold bi-plus-lg" />
              </button>
            </div>

            <div
              className={`mt-5       gap-2  flex-wrap p-2 ${
                keyowrds.length === 0 ? "hidden" : "flex"
              }`}
            >
              {keyowrds?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="text-xs bg-gray-50  rounded-sm p-1 "
                  >
                    {item}{" "}
                    <button
                      className="hover:bg-gray-100   rounded-sm"
                      onClick={() => {
                        removeSpecificKeywords(item);
                      }}
                    >
                      <i className="bi bi-x-lg font-bold p-1 " />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border p-5 flex-col flex gap-5 ">
            <h5 className="text-gray-500">Thmbnail</h5>

            <div className="w-full">
              <input
                type="file"
                draggable
                className=" text-transparent    w-full file:bg-white   file:text-red-400 file:cursor-pointer file:border file:outline-none file:font-semibold file:rounded-full file:w-full file:border-dashed file:border-gray-300 file:px-5 file:py-2 file:mr-2 cursor-pointer "
                onChange={handleFileChange}
              />

              {previewImage && (
                <div>
                  <h3 className="flex items-center gap-2">
                    Preview Image:{" "}
                    <span className="text-xs pColor font-semibold">
                      {FileName}{" "}
                    </span>
                  </h3>
                  <img
                    src={previewImage}
                    alt={FileName}
                    style={{ width: "100%" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CreateBlogs;
