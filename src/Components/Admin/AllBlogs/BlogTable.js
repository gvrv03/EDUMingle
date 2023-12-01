"use client";
import MainTableCom from "@/Components/Utility/MainTableCom";
import { useBlogs } from "@/Context/UseBlogsContext";
import { useAppStore } from "@/Context/UseStoreContext";
import React, { useState } from "react";
import { useEffect } from "react";

const BlogTable = () => {
  const { fetchBlogs } = useBlogs();
  const { blogsAll } = useAppStore();
  const [colData, setcolData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchBlogs({
      page: page,
      limit: 100,
    });
  }, [page]);
  const [blogID, setblogID] = useState("");
  const { data, isLoading, count } = blogsAll ? blogsAll : {};
  if (data?.length > 1) {
    if (colData.length === 0) {
      setcolData(Object.keys(data[0]));
    }
  }
  return (
    <MainTableCom
      data={data}
      isLoading={isLoading}
      colData={colData}
      // EditSet={<EditSet  />}
      itemID={blogID}
      count={count}
      setItemID={setblogID}
    />
  );
};

const EditSet = ({ clickID, itemID }) => {
  return (
    <div
      className={` ${
        clickID === itemID ? "flex" : "hidden"
      } text-xs gap-2  items-center  shadow-md z-10 flex-col rounded-md -left-10  md:-left-5  top-5  bg-white p-2  absolute`}
    >
      <button className=" hover:font-semibold text-left w-full ">
        {" "}
        <i className="uil uil-eye" /> <span>View</span>
      </button>
      <button className=" hover:font-semibold text-left w-full ">
        {" "}
        <i className="uil uil-edit" /> <span>Update</span>
      </button>
      <button className=" hover:font-semibold text-red-500 w-full  text-left ">
        {" "}
        <i className="uil uil-trash" /> <span>Delete</span>
      </button>
    </div>
  );
};
export default BlogTable;
