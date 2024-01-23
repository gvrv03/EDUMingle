"use client";
import React from "react";
import TutDescSkeleton from "@/Components/Skeleton/TutDescSkeleton";
import SubTitleDesc from "@/Components/Tutorial/SubTitleDesc";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Suspense } from "react";
import { useRouter } from "next/navigation";

const MyTut = ({ searchParams }) => {
  const router = useRouter();
  if (!searchParams?.ID) {
    return (
      <div className="bg-white p-2">
        <div className="p-2 flex items-center gap-2">
          <IconButton
            onClick={() => {
              router.push("/Tutorial");
            }}
            style={{ background: "#edf1ff" }}
            aria-label="delete"
            size="small"
          >
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
          No data Found
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
