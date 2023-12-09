import NavBar from "@/Components/NavBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <NavBar position="relative" />
      {children}
    </div>
  );
};

export default layout;
