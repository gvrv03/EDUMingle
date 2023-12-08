"use client";
import React from "react";
import UploadDocument from "@/Components/Admin/UploadDocuments/UploadDocument";
const page = () => {
  return (
    <div className=" bg-white p-5  flex-col flex gap-5  ">
      <h6 >Upload Documents</h6>
      <UploadDocument />
    </div>
  );
};

export default page;
