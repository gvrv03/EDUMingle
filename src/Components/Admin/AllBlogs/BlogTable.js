"use client";
import { FullScreenLoader } from "@/Components/LoadingSpinner";
import { useBlogs } from "@/Context/UseBlogsContext";
import { useAppStore } from "@/Context/UseStoreContext";
import ProductsData from "@/SampleData/ProductsData";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

const BlogTable = () => {
  const { fetchBlogs } = useBlogs();
  const { blogsAll } = useAppStore();
  console.log(blogsAll);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchBlogs({
      page: page,
      limit: 100,
    });
  }, [page]);
  const [blogID, setblogID] = useState("");
  const { data, isLoading, count } = blogsAll ? blogsAll : {};
  return (
    <div class="  md:w-full    no-scrollbar w-screen   md:border overflow-x-auto h-[60vh]">
      {data?.length === 0 && isLoading && (
        <FullScreenLoader styleHeight={"md:h-[100vh]"} />
      )}

      <table className="w-full     p-2 text-sm shadow-sm   text-left text-gray-500 ">
        <thead className=" text-gray-700 uppercase text-[12px] bg-gray-100 ">
          <th className=" w-fit px-2 text-center  py-4  pl-2">Sr.No.</th>
          <th className=" w-fit px-2 text-center  py-4 ">Image</th>
          <th className=" w-fit px-2 text-left  py-4 ">Title</th>
          <th className=" w-fit px-2 text-center  py-4 ">Category</th>
          <th className=" w-fit px-2 text-center  py-4 ">Author</th>
          <th className=" w-fit px-2 text-center  py-4 ">Created At</th>
          <th className=" w-fit px-2 text-center  py-4  pr-2 ">Edit/Delete</th>
        </thead>
        <br />
        <tbody className="    bg-red-600 text-[12px] ">
          {data?.map((item, index) => {
            return (
              <tr
                key={index}
                className={`   ${index % 2 == 0 ? "bg-gray-50" : "bg-white"}  `}
              >
                <td className="py-3 text-center  px-2 ">{item?._id}</td>
                <td className="font-semibold  py-3 grid place-items-center text-center ">
                  <img
                    src={item?.image}
                    className="w-10 rounded-full bg-gray-100  h-10 p-1 "
                  />
                </td>
                <th className="py-3 px-2  ">{item?.title}</th>
                <td className="py-3 px-2 text-center  ">{item?.category}</td>
                <td className="  p-1  text-[10px] font-semibold text-center text-orange-400">
                  {item?.author}
                </td>
                <td className="py-3 px-2  text-center ">03/11/2003</td>
                <td className="py-3 px-2  relative  text-center  ">
                  <IconButton
                    className="uil  uil-ellipsis-h  "
                    color="inherit"
                    onClick={() => {
                      if (blogID) {
                        setblogID("");
                      } else {
                        setblogID(item?._id);
                      }
                    }}
                  />
                  <EditSet clickID={item?._id} blogID={blogID} />
                </td>
              </tr>
            );
          })}
        </tbody>
        <br />
      </table>
      {!isLoading && count === 0 && <div className="p-5">No Order Found</div>}
    </div>
  );
};

const EditSet = ({ clickID, blogID }) => {
  return (
    <div
      className={` ${
        clickID === blogID ? "flex" : "hidden"
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
