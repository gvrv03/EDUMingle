import CreateBlogs from "@/Components/Admin/CreateBlogs";
import { IconButton } from "@mui/material";
import React from "react";

const Page = () => {
  return (
    <div className="p-5 bg-white flex-col flex gap-5  ">
      <h2 className="font-semibold  gap-1 flex text-xl  items-center ">
        <IconButton color="inherit" className=" uil text-2xl uil-angle-left pColor " />
        <span>Create Blog</span>
      </h2>
      <CreateBlogs />{" "}
    </div>
  );
};

export default Page;
