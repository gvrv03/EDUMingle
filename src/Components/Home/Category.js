import React, { memo } from "react";

const Category = () => {
  return (
    <div className="flex gap-5 md:gap-10 w-full  no-scrollbar md:justify-center items-center overflow-x-scroll p-5 bg-white ">
      <CardCircle image="/Category/Menu.svg" title="Explore" />
      <CardCircle image="/Category/Code.svg" title="Tutorials" />
      <CardCircle image="/Category/Study.svg" title="Academics" />
      <CardCircle image="/Category/Notify.svg" title="Notification" />
      <CardCircle image="/Category/Job.svg" title="Jobs" />
    </div>
  );
};

const CardCircle = ({ image, title }) => {
  return (
    <div className="flex  flex-col cursor-pointer  items-center justify-center   gap-2 ">
      <img
        src={image}
        alt="img"
        className="  transition-all delay-75 ease-out rounded-full shadow-md w-10  md:w-16  "
      />
      <h6 className="text-[11px] md:text-xs font-semibold ">{title}</h6>
    </div>
  );
};

export default memo(Category);
