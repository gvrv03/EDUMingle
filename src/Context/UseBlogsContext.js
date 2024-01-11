"use client";
import { CreateBlogAPI, FetchBlogsAPI } from "@/API/Blogs/BlogAPI";
import { storage } from "@/config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useCallback, useContext } from "react";
import { createContext } from "react";
import { toast } from "react-hot-toast";
import { v4 } from "uuid";
import { useAppStore } from "./UseStoreContext";
const useBlogsContext = createContext();
export function UseBlogsContexProvider({ children }) {
  const { setblogsAll } = useAppStore();

  const createBlog = async (blogData) => {
    try {
      const res = await CreateBlogAPI(blogData);
      if (!res?.isSuccess) {
        return toast.error(res?.error);
      }
      return toast.success(res?.message);
    } catch (error) {
      return toast.error(
        error?.response ? error?.response?.data?.error : error?.message
      );
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
      return toast.error(
        error?.response ? error?.response?.data?.errorMsg : error?.message
      );
    }
  };

  // ------------------------ Firebase Blog Upload ------------------------
  const UploadFileToFirebase = async (file, path) => {
    try {
      const imageRef = ref(storage, path);
      await uploadBytes(imageRef, file[0]);
      const fileURL = await getDownloadURL(imageRef);
      return fileURL;
    } catch (error) {
      return { error: error.message };
    }
  };
  // ------------------------ Upload Thmbnail data Link------------------------
  const handleUploadThumbnail = async (imagesFile, title, FileName) => {
    try {
      const thumbnailURL = await UploadFileToFirebase(
        imagesFile,
        `Blog/${title}/thumbnail/${FileName}`
      );
      toast.success("Files Uploaded!");
      return thumbnailURL;
    } catch (error) {
      return toast.error(error.message);
    }
  };

  return (
    <useBlogsContext.Provider
      value={{ createBlog, handleUploadThumbnail, fetchBlogs }}
    >
      {children}
    </useBlogsContext.Provider>
  );
}

export function useBlogs() {
  return useContext(useBlogsContext);
}
