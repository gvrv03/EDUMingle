"use client";
import { useUserAuth } from "@/Context/UserAuthContext";
import { useAppStore } from "@/Context/UseStoreContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AccountCardHeader from "../Utility/AccountCardHeader";
import DefaultBTN from "../Utility/DefaultBTN";

const UserProfile = () => {
  const [disablePersonal, setdisablePersonal] = useState(true);
  const [loading, setloading] = useState(false);
  const [disable, setdisable] = useState(true);
  const router = useRouter();
  const {  updateUserDetail } = useUserAuth();
  const [userData, setuserData] = useState({});
  const {userDetails} = useAppStore()

  function onChange(e) {
    setuserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    setloading(true);
    await updateUserDetail(userData);
    setloading(false);
  };

  return (
    <div className="flex flex-col  bg-white  ">
      <div className="flex items-center   text-black  bg-gray-50 p-5 py-2    gap-2 justify-start">
        <button
          onClick={() => {
            router.push("/MyAccount");
          }}
          className="md:hidden block pColor "
        >
          <i className="uil uil-angle-left-b -ml-3 text-2xl" />
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
              if (disablePersonal) {
                setdisablePersonal(false);
              } else {
                setdisablePersonal(true);
              }
            }}
            className="pColor text-xs "
          >
            Edit
          </button>
        </div>
        <div className="mt-2 flex  flex-col md:flex-row w-full  items-center gap-5 ">
          <div className=" md:mr-5  h-full  grid place-items-center  ">
            <div className="relative">
              <img
                src={userDetails?.User?.image}
                alt={userDetails?.User?.name}
                className="w-20"
              />
            </div>
          </div>
          <div className="flex-col flex  md:w-auto w-full  gap-2">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full  gap-2">
              <div className="gap-2 flex   items-center rounded border  p-2 ">
                <i className="uil uil-user pColor text-lg " />
                <input
                  disabled={disablePersonal}
                  type="text"
                  value={
                    userData.name ? userData?.name : userDetails?.User?.name
                  }
                  onChange={onChange}
                  name="name"
                  className="px-2 disabled:bg-white disabled:text-gray-500  outline-none w-full "
                />
              </div>
              <div className="gap-2 flex items-center rounded border  p-2 ">
                <i className="uil uil-calender pColor text-lg " />
                <input
                  type="date"
                  disabled={disablePersonal}
                  value={userData.dob ? userData?.dob : userDetails?.User?.dob}
                  onChange={onChange}
                  name="dob"
                  className="px-2 disabled:bg-white disabled:text-gray-500  outline-none w-full "
                />
              </div>
              <div className="gap-2 flex items-center rounded border  p-2 ">
                <i className="uil uil-venus pColor text-lg " />

                <select
                  disabled={disablePersonal}
                  value={
                    userData.gender
                      ? userData?.gender
                      : userDetails?.User?.gender
                  }
                  
                  onChange={onChange}
                  name="gender"
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
      {!disablePersonal && (
        <div className="bg-white flex flex-col gap-2 p-5">
          <DefaultBTN
            btnStyle="pBtn px-10 rounded-md  py-1 w-fit"
            nameBtn="Save"
            func={handleUpdateUser}
            loading={loading}
          />
        </div>
      )}{" "}
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
      <div className="bg-white flex flex-col gap-2 p-5">
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
      
    </div>
  );
};

export default UserProfile;
