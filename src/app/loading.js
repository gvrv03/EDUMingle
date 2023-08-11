import LoadingSpinner, { FullScreenLoader } from "@/Components/LoadingSpinner";
import NavBar from "@/Components/NavBar";
import React from "react";

const Alloading = () => {
  return (
    <>
      <NavBar shadow="drop-shadow-md" position="relative" />
      <div
        className="grid bottom-0 place-items-center w-full h-[100vh] left-0
     bg-white top-0 "
      >
        <FullScreenLoader />

        {/* <LoadingSpinner /> */}
      </div>
    </>
  );
};

export default Alloading;
``;
