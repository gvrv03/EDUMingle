import NavBar from "@/Components/NavBar";
import HomeNavSidebar from "@/Components/Sidebar/HomeNavSidebar";
import { UseTutorialContexProvider } from "@/Context/UseTutorialContext";
import React from "react";

const layout = ({ children }) => {
  return <UseTutorialContexProvider>{children}</UseTutorialContexProvider>;
};

export default layout;
