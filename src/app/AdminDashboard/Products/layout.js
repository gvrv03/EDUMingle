import { UseProductContexProvider } from "@/Context/UseProductContext";
import React from "react";

const layout = ({ children }) => {
  return <UseProductContexProvider>{children}</UseProductContexProvider>;
};

export default layout;
