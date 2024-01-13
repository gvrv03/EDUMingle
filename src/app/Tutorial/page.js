"use client";
import SortFilter from "@/Components/Product/HeaderSortFilter";
import AllBlogsSkeleton from "@/Components/Skeleton/AllBlogsSkeleton";
import AllTutorial from "@/Components/Tutorial/AllTutorial";
import React from "react";
import { Suspense } from "react";
import { useState } from "react";

const page = () => {
  const [page, setpage] = useState(1);

  return (
    <div className=" bg-white p-5  md:p-5  h-full">
      <SortFilter />
      <Suspense fallback={<AllBlogsSkeleton />}>
        <AllTutorial page={page} setpage={setpage} />
      </Suspense>
    </div>
  );
};

export default page;
