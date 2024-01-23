import Link from "next/link";
import React from "react";
import TutSidebarSkeleton from "../Skeleton/TutSidebarSkeleton";
const SubTitNav = ({ Data, ID, loading }) => {
  if (Data.length == 0) {
    return (
      <div className="text-sm border-b  hover:bg-gray-50 p-2  text-left ">
        No Data Found
      </div>
    );
  }
  return (
    <div className="   flex-col flex ">
      {loading && <TutSidebarSkeleton />}
      {Data?.map((item, index) => {
        return (
          <Link
            key={index}
            href={{
              pathname: `/Tutorial/` + ID,
              search: "?ID=" + item?.ID,
            }}
            className=" hover:no-underline text-sm border-b focus:no-underline text-gray-800  hover:bg-gray-100 hover:font-semibold p-2  text-left "
          >
            {item?.SubTitle}
          </Link>
        );
      })}
    </div>
  );
};

export default SubTitNav;
