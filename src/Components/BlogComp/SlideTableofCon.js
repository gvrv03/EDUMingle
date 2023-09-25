"use client";
import { useAppStore } from "@/Context/UseStoreContext";
import React from "react";
import TablOfContentModal from "../Modal/TablOfContentModal";

const SlideTableofCon = () => {
  const { TableOfContentState, setTableOfContentState } = useAppStore();
  return (
    <>
      <div className="md:hidden fixed top-14 items-center flex justify-between shadow-md bg-white px-5 py-2 w-full left-0 right-0 ">
        <h3 className="font-semibold text-lg" >Table of Content</h3>
        <button
          onClick={() => {
            setTableOfContentState(true);
          }}
          className=" right-0    text-black uil uil-angle-down text-2xl"
        />
      </div>
      <TablOfContentModal
        state={TableOfContentState}
        setstate={setTableOfContentState}
      />
    </>
  );
};

export default SlideTableofCon;
