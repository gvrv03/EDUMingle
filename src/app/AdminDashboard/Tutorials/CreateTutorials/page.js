import TitleCreate from "@/Components/Admin/Tutorials/TitleCreate";
import TutDetails from "@/Components/Admin/Tutorials/TutDetails";
import React from "react";

const page = () => {
  return (
    <div className="p-5  flex flex-col gap-5 bg-white">
      <div>
        <h5 className="py-2">Tutorial Details</h5>
        <TitleCreate />
      </div>
      <div>
        <h5 className="py-2">Tutorial Description</h5>
        <TutDetails />
      </div>
    </div>
  );
};

export default page;
