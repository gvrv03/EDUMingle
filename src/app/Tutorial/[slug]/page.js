"use client";
import React from "react";
import TutDescSkeleton from "@/Components/Skeleton/TutDescSkeleton";
import SubTitleDesc from "@/Components/Tutorial/SubTitleDesc";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import DetailHome from "@/Components/Tutorial/DetailHome";

const MyTut = ({ searchParams, params }) => {
  const router = useRouter();
  if (!searchParams?.ID) {
    return (
      <div className="bg-white flex md:flex-row flex-col gap-2 p-2">
        <Suspense fallback={<TutDescSkeleton />}>
          <DetailHome router={router} subTitleID={params?.slug} />
        </Suspense>

        <div className=" w-full  md:w-[24.6%] p-2 bg-red-100 md:fixed right-2 ">
          <h5>Popular Tutorials</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white flex md:flex-row flex-col gap-2 p-2">
      <Suspense fallback={<TutDescSkeleton />}>
        <SubTitleDesc router={router} subTitleID={searchParams?.ID} />
      </Suspense>

      <div className=" w-full  md:w-[24.6%] p-2 bg-red-100 md:fixed right-2 ">
        <h5>Popular Tutorials</h5>
      </div>
    </div>
  );
};

export default MyTut;
