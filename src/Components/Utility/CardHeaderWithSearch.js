import React, { memo } from "react";

const MainCardHeader = ({ name, styleCus }) => {
  return (
    <div className=" fixed md:relative  top-12 md:top-0 p-5 z-10  left-0 flex w-full bg-white justify-between gap-2 ">
      <div className="w-full flex gap-2">
        <input  type="text" placeholder="Search order here !" className=" outline-none  rounded-sm px-2  w-full border" />
        <button className="border p-2 rounded-sm px-4  uil uil-search pColor "/>
        <button className="border p-2 rounded-sm px-4  uil uil-filter pColor "/>
      </div>
    </div>
  );
};

export default memo(MainCardHeader);
