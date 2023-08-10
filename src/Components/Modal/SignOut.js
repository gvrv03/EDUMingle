"use client"
import { useUserAuth } from "@/Context/UserAuthContext";
import React from "react";

const SignOutModal = ({ state, setstate }) => {
  const { signOut } = useUserAuth();
  return (
    <div>
      <div
        className={`${
          state ? "fixed" : "hidden"
        }  w-full h-screen grid place-items-center   z-[9999] top-0  bottom-0 left-0  `}
      >
        <div className="bg-black absolute w-full h-full  opacity-50" />
        {/* <!-- Modal content --> */}
        <div className=" md:relative absolute bg-white p-5   md:pb-5 pb-20  transition-all delay-200 ease-linear  w-full md:w-[400px]  md:bottom-auto  bottom-0    md:rounded-lg rounded-t-lg  shadow ">
          {/* <!-- Modal header --> */}

          <div className="grid place-items-center">
            <i className="uil uil-info w-10 h-10 rounded-full text-4xl text-white bg-blue-600  " />
            <p className="mt-5 font-semibold">Are you sure to Sign Out !</p>
          </div>
          <div className="text-sm  flex gap-5 mt-5 ">
            <button
              className="bg-gray-100 font-semibold w-full  py-2 rounded-md "
              onClick={() => {
                setstate(false);
              }}
            >
              Cancel
            </button>
            <button
              className="pBtn w-full  py-2 rounded-md "
              onClick={() => {
                signOut();
                setstate(false);
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignOutModal;
