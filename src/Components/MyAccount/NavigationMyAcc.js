import { useRouter } from "next/navigation";
import React, { memo } from "react";
import AccountCardHeader from "../Utility/AccountCardHeader";

const NavigationMyAcc = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-white  w-full flex flex-col gap-5 p-5">
        <AccountCardHeader
          styleCus="font-semibold text-base"
          name="Account Setting"
        />
        <div className="flex-col   flex gap-2">
          <button
            onClick={() => {
              router.push("/MyAccount/EditProfile");
            }}
            className="flex  justify-between  items-center w-full"
          >
            <span className="flex gap-5 items-center ">
              <i className="uil uil-user text-lg pColor " />
              <span className="text-base font-normal">Edit Profile</span>
            </span>
            <i className="uil uil-angle-right-b text-lg pColor " />
          </button>
          <button className="flex  justify-between  items-center w-full">
            <span className="flex gap-5 items-center ">
              <i className="uil uil-map-marker text-lg pColor " />
              <span className="text-base font-normal">Saved Addresses</span>
            </span>
            <i className="uil uil-angle-right-b text-lg pColor " />
          </button>
          <button className="flex  justify-between  items-center w-full">
            <span className="flex gap-5 items-center ">
              <i className="uil uil-bell text-lg pColor " />
              <span className="text-base font-normal">
                Notification Setting
              </span>
            </span>
            <i className="uil uil-angle-right-b text-lg pColor " />
          </button>
        </div>
      </div>

      <div className="bg-white  w-full flex flex-col gap-5 p-5">
        <AccountCardHeader
          styleCus="font-semibold text-base"
          name="My Activity"
        />
        <div className="flex-col flex gap-2">
          <button className="flex  justify-between  items-center w-full">
            <span className="flex gap-5 items-center ">
              <i className="uil uil-edit-alt text-lg pColor " />
              <span className="text-base font-normal">Reviews</span>
            </span>
            <i className="uil uil-angle-right-b text-lg pColor " />
          </button>
          <button className="flex  justify-between  items-center w-full">
            <span className="flex gap-5 items-center ">
              <i className="uil uil-question text-lg pColor " />
              <span className="text-base font-normal">Questions & Answers</span>
            </span>
            <i className="uil uil-angle-right-b text-lg pColor " />
          </button>
        </div>
      </div>

      <div className="bg-white  w-full flex flex-col gap-5 p-5">
        <AccountCardHeader
          styleCus="font-semibold text-base"
          name="Feedbacks & Information"
        />
        <div className="flex-col flex gap-2">
          <button className="flex  justify-between  items-center w-full">
            <span className="flex gap-5  items-center ">
              <i className="uil uil-file-copy-alt text-lg pColor " />
              <span className="text-base font-normal">
                Terms, Policies & Licenses
              </span>
            </span>
            <i className="uil uil-angle-right-b text-lg pColor " />
          </button>
          <button className="flex  justify-between  items-center w-full">
            <span className="flex gap-5 items-center ">
              <i className="uil uil-question-circle text-lg pColor " />
              <span className="text-base font-normal">Browse FAQs</span>
            </span>
            <i className="uil uil-angle-right-b text-lg pColor " />
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(NavigationMyAcc);
