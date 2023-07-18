"use client";
import { useAppStore } from "@/Context/UseStoreContext";
import React, { useState } from "react";
import Login from "../Login/Login";

const Authentication = () => {
  const { signInModal, setsignInModal } = useAppStore();

  return (
    <div
      className={`${
        signInModal ? "fixed" : "hidden"
      }  w-full h-screen grid place-items-center  top-0  bottom-0 left-0  z-50 `}
    >
      <div className="bg-black absolute w-full h-full  opacity-50" />
      {/* <!-- Modal content --> */}
      <div className=" md:relative absolute bg-white p-5   md:pb-5 pb-20  transition-all delay-200 ease-linear  w-full md:w-[400px]  md:bottom-auto  bottom-0    md:rounded-lg rounded-t-lg  shadow ">
        {/* <!-- Modal header --> */}
        <div className="flex items-center    justify-between mb-5  pb-2 border-b rounded-t">
          <h3 className=" text-lg font-semibold text-gray-900 ">Sign In Now</h3>
          <button
            type="button"
            onClick={() => {
              setsignInModal(false);
            }}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
            data-modal-hide="defaultModal"
          >
            <i className="uil uil-times text-xl" />
          </button>
        </div>
        {/* <!-- Modal body --> */}
        <div className=" flex flex-col gap-5 ">
          <div className=" rounded-md overflow-hidden  ">
            <img
              src="https://img.ebonow.com/Posters/P6C.webp"
              className="w-full "
              alt=""
            />
          </div>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
