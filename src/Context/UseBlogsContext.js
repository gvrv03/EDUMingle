"use client";
import { CreateBlogAPI } from "@/API/Blogs/BlogAPI";
import { useCallback, useContext } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAppStore } from "./UseStoreContext";
const useBlogsContext = createContext();
export function UseBlogsContexProvider({ children }) {
  const createBlog = async (blogData) => {
    try {
      const res = await CreateBlogAPI(blogData);
      if (res.isSuccess) {
        toast.success(res.message);
      }
    } catch (error) {
      return toast.error(error?.response?.data?.errorMsg);
    }
  };

  return (
    <useBlogsContext.Provider value={{ createBlog }}>
      {children}
    </useBlogsContext.Provider>
  );
}

export function useBlogs() {
  return useContext(useBlogsContext);
}
