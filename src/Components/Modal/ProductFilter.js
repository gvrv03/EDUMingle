"use client";
import React, { useState } from "react";

const ProductFilter = ({ state, setstate }) => {
  return (
    <>
      <div
        className={`${
          state ? "fixed" : "hidden"
        }  w-full h-screen grid place-items-center md:hidden top-0  bottom-0 left-0  z-[9999]`}
      >
        <div className="bg-black absolute w-full h-full  opacity-50" />
        {/* <!-- Modal content --> */}
        <div className=" md:relative absolute bg-white p-5   md:pb-5 pb-20  transition-all delay-200 ease-linear  w-full md:w-[400px]  md:bottom-auto  bottom-0    md:rounded-lg rounded-t-lg  shadow ">
          {/* <!-- Modal header --> */}
          <div className="flex items-center    justify-between mb-5  pb-2 border-b rounded-t">
            {/* <!-- SignIn SignUp Navigation--> */}
            <div className=" text-   md:text-lg  text-gray-900 ">
              <button className={` font-semibold pb-2 text-lg `}>Filter</button>
            </div>
            <button
              onClick={() => {
                setstate(false);
              }}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              data-modal-hide="defaultModal"
            >
              <i className="uil uil-times text-xl" />
            </button>
          </div>

          <div>fdkghdjghdj</div>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
