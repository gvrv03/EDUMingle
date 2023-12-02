"use client";
import { CreateBlogAPI, FetchBlogsAPI } from "@/API/Blogs/BlogAPI";
import { useCallback, useContext } from "react";
import { createContext } from "react";
import { toast } from "react-hot-toast";
import { useAppStore } from "./UseStoreContext";
const useBlogsContext = createContext();
export function UseBlogsContexProvider({ children }) {
  const { setblogsAll } = useAppStore();

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

  const fetchBlogs = async (data) => {
    try {
      setblogsAll({
        data: [],
        isLoading: true,
        error: null,
        count: 0,
        totalPages: 0,
      });
      const BlogData = await FetchBlogsAPI(data);
      return setblogsAll({
        data: BlogData?.blogs,
        isLoading: false,
        count: BlogData?.blogCount,
        totalPages: BlogData?.totalPages,
      });
    } catch (error) {
      setblogsAll({
        data: [],
        isLoading: false,
        count: 0,
        error: error.message,
        totalPages: 0,
      });
      return toast.error(error?.response?.data?.errorMsg);
    }
  };

  return (
    <useBlogsContext.Provider value={{ createBlog, fetchBlogs }}>
      {children}
    </useBlogsContext.Provider>
  );
}

export function useBlogs() {
  return useContext(useBlogsContext);
}
