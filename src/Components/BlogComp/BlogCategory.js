import React from "react";

const BlogCategory = () => {
  return (
    <div className="w-full   bg-white ">
      <div className="font-semibold border-b-2  pb-2 ">Category</div>
      <div className=" mt-2  text-xs flex flex-col gap-1 ">
        <button className=" hover:font-semibold  flex justify-between text-left">
          {" "}
          <span> Python </span> <span>03</span>{" "}
        </button>
        <button className=" hover:font-semibold  flex justify-between text-left">
          {" "}
          <span> Java </span> <span>03</span>{" "}
        </button>
        <button className=" hover:font-semibold  flex justify-between text-left">
          {" "}
          <span> React Js </span> <span>03</span>{" "}
        </button>
        <button className=" hover:font-semibold  flex justify-between text-left">
          {" "}
          <span> Next JS </span> <span>03</span>{" "}
        </button>
        <button className=" hover:font-semibold  flex justify-between text-left">
          {" "}
          <span> Web Development </span> <span>05</span>{" "}
        </button>
        <button className=" hover:font-semibold  flex justify-between text-left">
          {" "}
          <span> Android Development </span> <span>03</span>{" "}
        </button>
      </div>
    </div>
  );
};

export default BlogCategory;
