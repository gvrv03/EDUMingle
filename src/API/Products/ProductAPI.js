import { ProductsURL } from "@/helper/allLinks";
import axios from "axios";

export const fetchProducts = async (data) => {
  const page = data?.page ?? 1;
  const limit = data?.limit ?? 10;
  const queryObj = data?.queryObj ?? {};
  const url =
    ProductsURL +
    `?page=${page}&limit=${limit}&query=${JSON.stringify(queryObj)}`;
  const res = await axios.get(url);
  return await res?.data;
};
