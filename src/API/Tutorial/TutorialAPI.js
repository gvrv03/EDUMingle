import { TutorialURL, TutorialDescURL } from "@/helper/allLinks";
import axios from "axios";

export const CreateTutorialAPI = async (Data) => {
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  try {
    const response = await axios.post(TutorialURL, Data, { headers });
    return await response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const CreateTutorialDetailAPI = async (Data) => {
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  try {
    const response = await axios.post(TutorialDescURL, Data, { headers });
    return await response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const FetchTutorialTitleAPI = async (data) => {
  const page = data?.page ? data?.page : 1;
  const limit = data?.limit ? data?.limit : 10;
  const queryObj = data?.queryObj ? data?.queryObj : {};
  const url =
    TutorialURL +
    `?page=${page}&limit=${limit}&query=${JSON.stringify(queryObj)}`;
  const res = await axios.get(url);

  return await res?.data;
};
