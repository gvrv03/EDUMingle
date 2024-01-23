"use client";
import { TutorialAllSubTitle } from "@/helper/allLinks";
import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";
import TutSidebarSkeleton from "../Skeleton/TutSidebarSkeleton";

const SidebarTut = ({ ID, setsubTitles, subTitles, loading, setloading }) => {
  const getSubTitles = async () => {
    setloading(true);
    const { data } = await axios.get(TutorialAllSubTitle + `/${ID}`);
    setloading(false);
    return setsubTitles(data);
  };

  useEffect(() => {
    getSubTitles();
  }, []);

  if (!loading && subTitles.length === 0) {
    return (
      <div className="text-sm border-b  hover:bg-gray-50 p-2  text-left ">
        No Data Founds
      </div>
    );
  }
  return (
    <div className="   flex-col flex ">
      {loading && <TutSidebarSkeleton />}
      {subTitles?.map((item, index) => {
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

export default SidebarTut;
