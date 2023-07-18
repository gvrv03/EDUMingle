import { checkUserURL, createUserURL, SendSMSToUserURL } from "@/helper/allLinks";
import axios from "axios";

export const SendSMSToUser = async (number) => {
  const url = SendSMSToUserURL;
  const res = await axios.post(url, { phoneNo: number });
  return res;
};

export const createUser = async (number, hash, OTP) => {
  const url = createUserURL;
  const data = {
    phoneNo: number,
    hash: hash,
    OTP: OTP,
  };
  const res = await axios.post(url, data);
  return await res?.data;
};

export const checkUser = async (token) => {
  const url = checkUserURL;
  const data = {
    token: token,
  };
  const res = await axios.post(url, data);
  return await res?.data;
};
