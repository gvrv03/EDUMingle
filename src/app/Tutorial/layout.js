import { UseTutorialContexProvider } from "@/Context/UseTutorialContext";
import React from "react";

const layout = ({ children }) => {
  return (
    <UseTutorialContexProvider>
      {children}</UseTutorialContexProvider>
  );
};

export default layout;
