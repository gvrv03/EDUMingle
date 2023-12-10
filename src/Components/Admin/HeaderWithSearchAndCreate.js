"use client";
import { useAppStore } from "@/Context/UseStoreContext";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import { toast } from "react-hot-toast";

const HeaderWithSearchAndCreate = ({
  create,
  totalPages,
  page,
  setPage,
  setLimit,
  limit,
  noOfData,
}) => {
  const router = useRouter();
  const { handleGenerateRandomString } = useAppStore();
  return (
    <div className="flex  flex-col gap-5">
      <form className="flex  justify-between gap-2 w-full">
        <input
          type="search"
          className="outline-none border  p-2  rounded-sm w-full"
          placeholder='{ "Key" : "Value" }'
        />
        <button
          type="button"
          onClick={handleGenerateRandomString}
          className="uil uil-sync border p-2  rounded-sm px-4"
        />
        <button className="uil uil-search border p-2  rounded-sm px-4" />
        <button
          onClick={() => {
            router.push(create);
          }}
          type="button"
          className="flex border p-2 px-4 gap-2 rounded-sm  "
        >
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
            <select
              value={limit}
              onChange={(e) => {
                setLimit(e.target.value);
              }}
              className="outline-none border p-1"
            >
              <option value="">All</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>{" "}
          </div>
        </div>
      </div>{" "}
      <div className="flex justify-end items-center gap-5 text-sm ">
        <span>
          {page}-{noOfData} of {totalPages}
        </span>
        <div>
          {" "}
          <IconButton
            onClick={() => {
              if (page > 1) {
                setPage((page) => page - 1);
              }
            }}
            className="uil text-xl  uil-angle-left  "
            color="inherit"
          />{" "}
          <IconButton
            onClick={() => {
              if (page < totalPages) {
                setPage((page) => page + 1);
              } else {
                toast.error("You reach at the End!");
              }
            }}
            className="uil text-xl  uil-angle-right  "
            color="inherit"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderWithSearchAndCreate;
