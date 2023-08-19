import { IconButton } from "@mui/material";
import React from "react";

const HeaderWithSearchAndCreate = () => {
  return (
    <div className="flex  flex-col gap-5">
      <form className="flex  justify-between gap-2 w-full">
        <input
          type="search"
          className="outline-none border  p-2  rounded-sm w-full"
          placeholder='{ "Key" : "Value" }'
        />
        <button className="uil uil-search border p-2  rounded-sm px-4" />
        <button className="flex border p-2 px-4 gap-2 rounded-sm  ">
          <i className="uil uil-plus " /> <span>Create</span>
        </button>
      </form>{" "}
      <div className="flex justify-between text-sm ">
        <div className="flex gap-2">
          <button className="border p-1 px-3 rounded-full flex gap-2  ">
            <i className=" text-gray-700 uil uil-import" />
            <span>Import</span>
          </button>
          <button className="border p-1 px-3 rounded-full flex gap-2  ">
            <i className=" text-gray-700 uil uil-export" />
            <span>Export</span>
          </button>
        </div>
        <div className="flex gap-2">
          <div>
            Row per Page :{" "}
            <select className="outline-none border p-1">
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>{" "}
          </div>
        </div>
      </div>{" "}
      <div className="flex justify-end items-center gap-5 text-sm ">
        <span>1-10 of 13</span>
        <div>
          {" "}
          <IconButton
            className="uil text-xl  uil-angle-left  "
            color="inherit"
          />{" "}
          <IconButton
            className="uil text-xl  uil-angle-right  "
            color="inherit"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderWithSearchAndCreate;
