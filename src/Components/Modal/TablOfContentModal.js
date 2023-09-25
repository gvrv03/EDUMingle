"use client";
import React from "react";

const TablOfContentModal = ({ state, setstate }) => {
  return (
    <div
      className={` ${
        state ? "top-14" : "-top-full"
      }   h-auto  md:top-16 transition-all delay-200 ease-in-out left-0 md:left-auto drop-shadow-sm md:drop-shadow-none md:border-none  fixed z-[9999]  border   md:right-0  md:p-5   w-[100%] rounded-md  md:w-[25%]`}
    >
      {/* <div
        onClick={() => {
          setstate(false);
        }}
        className="bg-black  transition-none  absolute w-full h-full  md:hidden opacity-50"
      /> */}
      <div className="w-[100%]  md:w-full right-0 absolute  bg-white md:relative  md:bg-gray-100 p-5 top-0  border ">
        <button
          onClick={() => {
            setstate(false);
          }}
          className=" md:hidden  border p-1 w-full h-10 flex items-center px-2 mb-5 justify-between rounded-sm "
        >
          <h1 className=" text-xs font-semibold ">Table of Content</h1>
          <i className="uil uil-angle-up text-2xl" />
        </button>
        <div className="flex-col flex gap-2">
          <h1 className="font-semibold hidden md:block">Table of Content</h1>
          <dl>
            <dt>HTML</dt>
            <dd>Hey i am HTML</dd>

            <dt>HTML</dt>
            <dd>Hey i am HTML</dd>

            <dt>HTML</dt>
            <dd>Hey i am HTML</dd>

            <dt>HTML</dt>
            <dd>Hey i am HTML</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default TablOfContentModal;
