import { ProductsURL, savedProductToFavoriteURL } from "@/helper/allLinks";
import axios from "axios";

export const fetchProductsAPI = async (data) => {
  const page = data?.page ? data?.page : 1;
  const limit = data?.limit ? data?.limit : 10;
  const queryObj = data?.queryObj ? data?.queryObj : {};
  const url =
    ProductsURL +
    `?page=${page}&limit=${limit}&query=${JSON.stringify(queryObj)}`;
  const res = await axios.get(url);
  return await res?.data;
};

export const SavedProductAPI = async (productID) => {
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  const response = await axios.post(
    savedProductToFavoriteURL,
    {
      productID: productID,
      userId: localStorage.getItem("id"),
    },
    { headers }
  );
  return await response?.data;
};
