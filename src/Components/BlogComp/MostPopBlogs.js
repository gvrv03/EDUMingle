import { BlogsURL } from "@/helper/allLinks";
import React from "react";

const MostPopBlogs = async () => {
  // const res = await fetch(BlogsURL + `?page=1&limit=5`);
  // const { blogs, totalPages } = await res.json();
  // console.log(blogs);
  return (
    <div className="w-full   bg-white ">
      <div className="font-semibold border-b-2  pb-2 ">Most Popular</div>
      <div className=" mt-2  flex flex-col gap-2 ">
        <div className="flex gap-2 border p-2  items-center  ">
          <img
            src="https://www.codingnepalweb.com/wp-content/uploads/2023/07/How-to-a-Create-Netflix-Login-Page-in-HTML-and-CSS-only.jpg"
            className="w-14 h-14"
            alt=""
          />
          <div className="text-xs flex flex-col justify-between gap-1">
            <div>Lorem ipsum dolor sit amet consec</div>
            <div className="text-[10px] font-semibold ">03 Aug 2003</div>
          </div>
        </div>
        <div className="flex gap-2 border p-2  items-center  ">
          <img
            src="https://www.codingnepalweb.com/wp-content/uploads/2023/07/How-to-a-Create-Netflix-Login-Page-in-HTML-and-CSS-only.jpg"
            className="w-14 h-14"
            alt=""
          />
          <div className="text-xs flex flex-col justify-between gap-1">
            <div>Lorem ipsum dolor sit amet consec</div>
            <div className="text-[10px] font-semibold ">03 Aug 2003</div>
          </div>
        </div>{" "}
        <div className="flex gap-2 border p-2  items-center  ">
          <img
            src="https://www.codingnepalweb.com/wp-content/uploads/2023/07/How-to-a-Create-Netflix-Login-Page-in-HTML-and-CSS-only.jpg"
            className="w-14 h-14"
            alt=""
          />
          <div className="text-xs flex flex-col justify-between gap-1">
            <div>Lorem ipsum dolor sit amet consec</div>
            <div className="text-[10px] font-semibold ">03 Aug 2003</div>
          </div>
        </div>{" "}
        <div className="flex gap-2 border p-2  items-center  ">
          <img
            src="https://www.codingnepalweb.com/wp-content/uploads/2023/07/How-to-a-Create-Netflix-Login-Page-in-HTML-and-CSS-only.jpg"
            className="w-14 h-14"
            alt=""
          />
          <div className="text-xs flex flex-col justify-between gap-1">
            <div>Lorem ipsum dolor sit amet consec</div>
            <div className="text-[10px] font-semibold ">03 Aug 2003</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopBlogs;
