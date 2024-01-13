import { TutorialAllSubTitle } from "@/helper/allLinks";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { Suspense } from "react";

const SidebarTut = async ({ params }) => {
  const obj = { TutTitle: params?.slug.toString() };
  const queryString = JSON.stringify(obj);
  const res = await axios.get(TutorialAllSubTitle + `?query=${queryString}`);
  const data = await res?.data;
  if (data?.isSuccess == false) {
    return (
      <div className="text-sm border-b  hover:bg-gray-50 p-2  text-left ">
        No Data Found
      </div>
    );
  }
  return (
    <div className=" flex-col flex ">
      {data?.map((item, index) => {
        return (
          <Link
            key={index}
            href={{
              pathname: `/Tutorial/` + params?.slug,
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

export default SidebarTut;
