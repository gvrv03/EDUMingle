"use client";
import { CldUploadWidget } from "next-cloudinary";
import React from "react";
import { CldUploadButton } from "next-cloudinary";
import UploadDocument from "@/Components/Admin/UploadDocuments/UploadDocument";
const page = () => {
  return (
    <div className="bg-white p-5" >
      <UploadDocument />
      {/* <CldUploadButton signatureEndpoint="https://res.cloudinary.com/dunnpktnn" /> */}
    </div>
  );
};

export default page;
