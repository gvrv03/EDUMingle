"use client";
import { CreateBlogAPI, FetchBlogsAPI } from "@/API/Blogs/BlogAPI";
import { useCallback, useContext } from "react";
import { createContext } from "react";
import { toast } from "react-hot-toast";
import { useAppStore } from "./UseStoreContext";
const useUploadDocContext = createContext();
export function UseUseUploadDocProvider({ children }) {
  return (
    <useUploadDocContext.Provider value={{}}>
      {children}
    </useUploadDocContext.Provider>
  );
}

export function useUploadDoc() {
  return useContext(useUploadDocContext);
}
