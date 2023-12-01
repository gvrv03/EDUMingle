import { UseUseUploadDocProvider } from "@/Context/UseUploadDocContext";
import React from "react";

const DocumentLayout = ({ children }) => {
  return <UseUseUploadDocProvider>{children}</UseUseUploadDocProvider>;
};

export default DocumentLayout;
