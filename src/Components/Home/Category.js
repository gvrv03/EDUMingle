"use client"
import { useRouter } from "next/navigation";
import React, { memo } from "react";

const Category = () => {
  return (
    <div className="flex gap-5 md:gap-10 w-full  no-scrollbar  items-center overflow-x-scroll p-5 bg-white ">
      <CardCircle location="" image="/Category/Menu.svg" title="Explore" />
      <CardCircle
        location="/Tutorial"
        image="/Category/Code.svg"
        title="Tutorials"
      />
      <CardCircle location="" image="/Category/Study.svg" title="Academics" />
      <CardCircle
        location=""
        image="/Category/Notify.svg"
        title="Notification"
      />
      <CardCircle location="" image="/Category/Job.svg" title="Jobs" />
    </div>
  );
};

const CardCircle = ({ location, image, title }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(location);
      }}
      className="flex  flex-col cursor-pointer  items-center justify-center   gap-2 "
    >
      <img
        src={image}
        alt="img"
        className="  transition-all delay-75 ease-out rounded-full shadow-md w-10  md:w-16  "
      />
      <h6 className="text-[11px] md:text-xs font-semibold ">{title}</h6>
    </button>
  );
};

export default memo(Category);
