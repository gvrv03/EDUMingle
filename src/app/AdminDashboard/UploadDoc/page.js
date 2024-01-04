"use client";
import PdfViewer from "@/components/PdfViewer";
import React from "react";
import { useState } from "react";
const page = () => {
  return (
    <div className=" bg-white p-5  flex-col flex gap-5  ">
      <h6>Upload Documents</h6>
      <PdfViewer pdfUrl="https://pdfobject.com/pdf/sample.pdf" />
    </div>
  );
};

export default page;
