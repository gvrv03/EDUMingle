"use client";
import React from "react";

const TablOfContentModal = ({ state, setstate }) => {
  return (
    <div
      className={` ${
        state ? "right-0" : "-right-full"
      }   h-full top-0 md:top-24 transition-all delay-75 ease-linear   fixed z-[9999] md:h-auto   md:right-0  md:p-5   w-[100%] rounded-md  md:w-[25%]`}
    >
      <div
        onClick={() => {
          setstate(false);
        }}
        className="bg-black  transition-none  absolute w-full h-full  md:hidden opacity-50"
      />
      <div className="w-[60%]  md:w-full right-0 absolute  bg-white md:relative  md:bg-gray-100 p-5 top-0 h-full border ">
        <button
          onClick={() => {
            setstate(false);
          }}
          className="uil md:hidden text-lg border p-1 w-10 h-10 rounded-sm uil-multiply"
        />
        <h1 className="font-semibold">Table of Content</h1>
        <div className="flex-col flex gap-2">
          <button className="hover:text-blue-600 w-full text-left hover:font-semibold">
            Lorem, ipsum.
          </button>
          <button className="hover:text-blue-600 w-full text-left hover:font-semibold">
            Lorem, ipsum.
          </button>
          <button className="hover:text-blue-600 w-full text-left hover:font-semibold">
            Lorem, ipsum.
          </button>
          <button className="hover:text-blue-600 w-full text-left hover:font-semibold">
            Lorem, ipsum.
          </button>
        </div>
      </div>
    </div>
  );
};

export default TablOfContentModal;
