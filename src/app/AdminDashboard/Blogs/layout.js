import { UseBlogsContexProvider } from "@/Context/UseBlogsContext";
import React from "react";

const layout = ({ children }) => {
  return <UseBlogsContexProvider>{children}</UseBlogsContexProvider>;
};

export default layout;
