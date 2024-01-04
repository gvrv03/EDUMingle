import { BlogsURL } from "@/helper/allLinks";
import axios from "axios";

export const CreateBlogAPI = async (blogData) => {
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  try {
    const response = await axios.post(BlogsURL, blogData, { headers });
    return await response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const UpdateBlogAPI = async () => {};

export const FetchBlogsAPI = async (data) => {
  const page = data?.page ? data?.page : 1;
  const limit = data?.limit ? data?.limit : 10;
  const queryObj = data?.queryObj ? data?.queryObj : {};
  const url =
    BlogsURL + `?page=${page}&limit=${limit}&query=${JSON.stringify(queryObj)}`;
  const res = await axios.get(url);

  return await res?.data;
};
