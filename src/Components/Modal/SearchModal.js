"use client";
import { useUserAuth } from "@/Context/UserAuthContext";
import React from "react";

const SearchModal = ({ state, setstate }) => {
  const { signOut } = useUserAuth();
  return (
    <div
      className={`${
        state ? "fixed" : "hidden"
      }  w-full h-screen flex justify-center    transition-all delay-100 ease-out  z-[9999] top-0  bottom-0 left-0  `}
    >
      <div className="bg-black absolute w-full h-full  opacity-50" />
      {/* <!-- Modal content --> */}
      <div className=" md:relative absolute bg-white p-5 top-0 md:m-5  md:pb-5 md:h-[60vh] pb-20  transition-all delay-200 ease-linear  w-full md:w-[50%]  md:bottom-auto  bottom-0    md:rounded-lg  shadow ">
        {/* <!-- Modal header --> */}
        <div className="flex items-center    justify-between mb-5  gap-5 pb-2 border-b rounded-t">
          {/* <!-- SignIn SignUp Navigation--> */}
          <div className="   w-full text-gray-900  border rounded-md py-2 px-5 flex gap-2 ">
            <form className="w-full">
              <input
                type="search"
                className="w-full outline-none text-sm"
                placeholder="Search ..."
              />
            </form>

            <button className="uil pColor uil-search" />
          </div>
          <button
            onClick={() => {
              setstate(false);
            }}
            type="button"
            className="text-gray-400   bg-transparent hover:bg-gray-200 hover:text-gray-900 border p-5 rounded-md text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
            data-modal-hide="defaultModal"
          >
            <i className="uil uil-times text-xl" />
          </button>
        </div>

        <div>fdkghdjghdj</div>
      </div>
    </div>
  );
};

export default SearchModal;
