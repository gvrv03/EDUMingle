import TutDescSkeleton from "@/Components/Skeleton/TutDescSkeleton";
import SubTitleDesc from "@/Components/Tutorial/SubTitleDesc";
import React from "react";
import { Suspense } from "react";

const page = ({ searchParams }) => {
  if (!searchParams?.ID) {
    return <div className="bg-white p-5">No data Found</div>;
  }
  return (
    <div className="bg-white p-2">
      <Suspense fallback={<TutDescSkeleton />}>
        <SubTitleDesc subTitleID={searchParams?.ID} />
      </Suspense>{" "}
    </div>
  );
};

export default page;
