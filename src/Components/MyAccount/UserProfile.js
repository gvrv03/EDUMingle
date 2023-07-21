"use client";
import { useUserAuth } from "@/Context/UserAuthContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AccountCardHeader from "../Utility/AccountCardHeader";

const UserProfile = () => {
  const [disable, setdisable] = useState(true);
  const router = useRouter();
  const { userDetails } = useUserAuth();
  return (
    <div className="flex flex-col  bg-white  ">
      <div className="flex items-center   text-white  bgPColor p-5 py-2    gap-2 justify-start">
        <button
          onClick={() => {
            router.push("/MyAccount");
          }}
          className="md:hidden block"
        >
          <i className="uil uil-angle-left-b text-2xl" />
        </button>
        <AccountCardHeader
          styleCus="font-semibold text-lg"
          name="Edit Profile"
        />
      </div>
      <div className=" p-5 bg-white ">
        <div className="flex gap-2 items-center ">
          <AccountCardHeader
            styleCus="font-semibold text-base"
            name="Personal Information"
          />
          <button
            onClick={() => {
              if (disable) {
                setdisable(false);
              } else {
                setdisable(true);
              }
            }}
            className="pColor "
          >
            Edit
          </button>
        </div>
        <div className="mt-2 flex  flex-col md:flex-row w-full  items-center gap-5 ">
          <div className=" w-[20%]  h-full grid place-items-center  ">
            <div className="relative">
              <img
                src={userDetails?.User?.image}
                alt={userDetails?.User?.name}
                className="w-20"
              />
              {!disable && (
                <button className="pColor absolute bottom-0 -right-4 ">
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="flex-col flex  md:w-auto w-full  gap-2">
            <div className="grid grid-cols-2 w-full  gap-2">
              <div className="gap-2 flex   items-center rounded border  p-2 ">
                <i className="uil uil-user pColor text-lg " />
                <input
                  disabled={disable}
                  type="text"
                  value={userDetails?.User?.name}
                  className="px-2 disabled:bg-white disabled:text-gray-500  outline-none w-full "
                />
              </div>
              <div className="gap-2 flex items-center rounded border  p-2 ">
                <i className="uil uil-calender pColor text-lg " />
                <input
                  type="date"
                  disabled={disable}
                  value={userDetails?.User?.dob}
                  className="px-2 disabled:bg-white disabled:text-gray-500  outline-none w-full "
                />
              </div>
              <div className="gap-2 flex items-center rounded border  p-2 ">
                <i className="uil uil-venus pColor text-lg " />

                <select
                  disabled={disable}
                  value={userDetails?.User?.dob}
                  className="px-2 disabled:bg-white disabled:text-gray-500  outline-none w-full "
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 bg-white">
        <AccountCardHeader
          styleCus="font-semibold text-base"
          name="Contact Information"
        />
        <div className="mt-2 flex  w-full  items-center gap-5 ">
          <div className="flex-col flex  md:w-auto w-full gap-2">
            <div className="grid grid-cols-1 md:grid-cols-2   w-full  gap-2">
              <div className="gap-2 flex   w-full items-center rounded border  p-2 ">
                <i className="uil uil-envelope pColor text-lg " />
                <input
                  disabled={disable}
                  type="email"
                  value={userDetails?.User?.email}
                  className="px-2 disabled:bg-white disabled:text-gray-500  outline-none w-full "
                />
              </div>
              <div className="gap-2 flex w-full items-center rounded border  p-2 ">
                <i className="uil uil-phone pColor text-lg " />
                <input
                  type="number"
                  disabled={disable}
                  value={userDetails?.User?.phoneNo}
                  className="px-2 disabled:bg-white disabled:text-gray-500  outline-none w-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {!disable && (
        <div class="bg-white flex flex-col gap-2 p-5">
          <button className="pBtn px-10 rounded-md  py-2 w-fit">Save</button>
        </div>
      )}{" "}
      <div class="bg-white flex flex-col gap-2 p-5">
        <AccountCardHeader styleCus="font-semibold text-base" name="FAQs" />

        <div className="flex-col gap-2 flex justify-between">
          <div>
            <h4 className="font-semibold mb-1">
              What happens when I update my email address (or mobile number)?
            </h4>
            <p>
              Your login email id (or mobile number) changes, likewise. You will
              receive all your account related communication on your updated
              email address (or mobile number).
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-1">
              When will my account be updated with the new email address (or
              mobile number)?
            </h4>
            <p>
              It happens as soon as you confirm the verification code sent to
              your email (or mobile) and save the changes.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">
              What happens to my existing account when I update my email address
              (or mobile number)?
            </h4>
            <p>
              Updating your email address (or mobile number) does not invalidate
              your account. Your account remains fully functional. You will
              continue seeing your Order history, saved information and personal
              details.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white ">
        <img
          className="w-full"
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default UserProfile;
