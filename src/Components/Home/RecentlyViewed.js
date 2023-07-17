import React, { memo } from "react";
import MainCardHeader from "../Utility/MainCardHeader";

const RecentlyViewed = () => {
  return (
    <div className="bg-white  rounded-md flex flex-col gap-5 p-5">
      <MainCardHeader name="Recently Viewed" />

      <div className="flex gap-5 w-full  no-scrollbar  overflow-scroll">
        <ViewCard />
        <ViewCard />
        <ViewCard />
        <ViewCard />
        <ViewCard />
      </div>
    </div>
  );
};

const ViewCard = () => {
  return (
    <div className="flex gap-2   border w-full   p-2 rounded-md">
      <div className="w-20">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/da4491af4ee551d6.png?q=100"
          alt=""
        />
      </div>
      <div className="">
        <div className=" font-semibold">PVC Wallet Card</div>
        <div className="text-xs text-gray-500 ">Hey Bro</div>
      </div>
    </div>
  );
};
export default memo(RecentlyViewed);
