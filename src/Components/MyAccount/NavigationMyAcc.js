import { useRouter } from "next/navigation";
import React, { memo } from "react";
import AccountCardHeader from "../Utility/AccountCardHeader";

const NavigationMyAcc = () => {
  const router = useRouter();
  return (
    <div className="gap-2     md:gap-5 p-0 md:p-5  flex flex-col ">
      <div className="bg-white grid grid-cols-2 gap-5 p-5 md:p-0  ">
        <button
          onClick={() => {
            router.push("/MyAccount/Orders");
          }}
          className="w-full border p-1 px-2 rounded-sm font-medium   text-base  md:text-xs text-left "
        >
          {" "}
          <i className="uil uil-shopping-cart pColor text-lg mr-2" />{" "}
          <span>Orders</span>
        </button>
        <button className="w-full border p-1 px-2 rounded-sm font-medium   text-base  md:text-xs text-left ">
          {" "}
          <i className="uil uil-heart pColor text-lg mr-2" />{" "}
          <span>Wishlist</span>
        </button>
        <button className="w-full border p-1 px-2 rounded-sm font-medium   text-base  md:text-xs text-left ">
          {" "}
          <i className="uil uil-gift pColor text-lg mr-2" />{" "}
          <span>Coupans</span>
        </button>
        <button className="w-full border p-1 px-2 rounded-sm font-medium   text-base  md:text-xs text-left ">
          {" "}
          <i className="uil uil-headphones pColor text-lg mr-2" />{" "}
          <span>Need Help</span>
        </button>
      </div>
     
      <div className="bg-white  w-full flex flex-col gap-5 md:gap-3  p-5 md:p-0 ">
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
              <span className="text-base font-normal   md:text-sm">
                Edit Profile
              </span>
            </span>
            <i className="uil uil-angle-right-b text-lg pColor " />
          </button>
          <button className="flex  justify-between  items-center w-full">
            <span className="flex gap-5 items-center ">
              <i className="uil uil-map-marker text-lg pColor " />
              <span className="text-base font-normal   md:text-sm">
                Saved Addresses
              </span>
            </span>
            <i className="uil uil-angle-right-b text-lg pColor " />
          </button>
          <button className="flex  justify-between  items-center w-full">
            <span className="flex gap-5 items-center ">
              <i className="uil uil-bell text-lg pColor " />
              <span className="text-base font-normal   md:text-sm">
                Notification Setting
              </span>
            </span>
            <i className="uil uil-angle-right-b text-lg pColor " />
          </button>
        </div>
      </div>

      <div className="bg-white  w-full flex flex-col gap-5 md:gap-3  p-5 md:p-0 ">
        <AccountCardHeader
          styleCus="font-semibold text-base"
          name="My Activity"
        />
        <div className="flex-col flex gap-2">
          <button className="flex  justify-between  items-center w-full">
            <span className="flex gap-5 items-center ">
              <i className="uil uil-edit-alt text-lg pColor " />
              <span className="text-base font-normal   md:text-sm">
                Reviews
              </span>
            </span>
            <i className="uil uil-angle-right-b text-lg pColor " />
          </button>
          <button className="flex  justify-between  items-center w-full">
            <span className="flex gap-5 items-center ">
              <i className="uil uil-question text-lg pColor " />
              <span className="text-base font-normal   md:text-sm">
                Questions & Answers
              </span>
            </span>
            <i className="uil uil-angle-right-b text-lg pColor " />
          </button>
        </div>
      </div>

      <div className="bg-white  w-full flex flex-col gap-5 md:gap-3  p-5 md:p-0 ">
        <AccountCardHeader
          styleCus="font-semibold text-base"
          name="Feedbacks & Information"
        />
        <div className="flex-col flex gap-2">
          <button className="flex  justify-between  items-center w-full">
            <span className="flex gap-5  items-center ">
              <i className="uil uil-file-copy-alt text-lg pColor " />
              <span className="text-base font-normal   md:text-sm">
                Terms, Policies & Licenses
              </span>
            </span>
            <i className="uil uil-angle-right-b text-lg pColor " />
          </button>
          <button className="flex  justify-between  items-center w-full">
            <span className="flex gap-5 items-center ">
              <i className="uil uil-question-circle text-lg pColor " />
              <span className="text-base font-normal   md:text-sm">
                Browse FAQs
              </span>
            </span>
            <i className="uil uil-angle-right-b text-lg pColor " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(NavigationMyAcc);
