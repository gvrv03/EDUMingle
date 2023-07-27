
import LoadingSpinner from "@/Components/LoadingSpinner";
import React from "react";

const Alloading = () => {
  return (
    <div
      className="grid bottom-0 place-items-center w-full h-[90vh] left-0
     bg-white top-0 "
    >
      <LoadingSpinner />
    </div>
  );
};

export default Alloading;
