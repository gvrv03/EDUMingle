import { BlogsURL } from "@/helper/allLinks";
import axios from "axios";

export const CreateBlogAPI = async (blogData) => {
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  const response = await axios.post(BlogsURL, blogData, { headers });
  return await response?.data;
};

export const UpdateBlogAPI = async () => {};
export const FetchBlogsAPI = async () => {};
