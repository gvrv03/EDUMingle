import LoadingSpinner, { FullScreenLoader } from "@/Components/LoadingSpinner";
import NavBar from "@/Components/NavBar";
import React from "react";

const Alloading = () => {
  return (
    <div
      className="grid bottom-0 place-items-center w-full h-[100vh] left-0
     bg-white top-0 "
    >
      <NavBar shadow="drop-shadow-md" position="fixed" />
      <FullScreenLoader />

      {/* <LoadingSpinner /> */}
    </div>
  );
};

export default Alloading;
``;
