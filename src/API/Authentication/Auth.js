import { createUserURL, SendSMSToUserURL } from "@/helper/allLinks";
import axios from "axios";

export const SendSMSToUser = async (number, OTP) => {
  const url = SendSMSToUserURL;

  const res = await axios.post(url, { phoneNo: number, OTP: OTP });

  return res;
};

export const createUser = async (number) => {
  const url = createUserURL;
  const data = {
    phoneNo: number,
  };
  const res = await axios.post(url, data);
  return res?.data;
};
