"use client";
import { useAppStore } from "@/Context/UseStoreContext";
import React from "react";
import TablOfContentModal from "../Modal/TablOfContentModal";

const SlideTableofCon = () => {
  const { TableOfContentState, setTableOfContentState } = useAppStore();
  return (
    <>
      <button
        onClick={() => {
          setTableOfContentState(true);
        }}
        className="fixed right-0 md:hidden  p-1 bgColor rounded-l-full bg-red-400 text-white uil uil-angle-left text-2xl"
      />
      <TablOfContentModal
        state={TableOfContentState}
        setstate={setTableOfContentState}
      />
    </>
  );
};

export default SlideTableofCon;
