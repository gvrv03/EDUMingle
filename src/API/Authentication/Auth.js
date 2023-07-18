import {
  checkUserExistURL,
  checkUserURL,
  createUserURL,
  Fast2SMSURL,
  SendSMSToUserURL,
  signInUserURL,
} from "@/helper/allLinks";
import axios from "axios";

export const Fast2SMSSend = async (phoneNo, OTP) => {
  const url = Fast2SMSURL;
  const data = {
    variables_values: OTP,
    route: "otp",
    numbers: phoneNo,
  };
  const headers = {
    authorization: process.env.FAST2SMSAPI,
    "Content-Type": "application/json",
  };
  const res = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });
  const result = await res.json();
  return result;
};

export const SendSMSToUser = async (number) => {
  const url = SendSMSToUserURL;
  const res = await axios.post(url, { phoneNo: number });
  return res;
};

export const SignIn = async (email, password) => {
  const url = signInUserURL;
  const res = await axios.post(url, { email, password });
  console.log(email,password);
  console.log(res);

  return res;
};

export const checkUserExists = async (number, email) => {
  const url = checkUserExistURL;
  const res = await axios.post(url, { phoneNo: number, email });
  return res;
};

export const createUser = async (number, hash, OTP, userData, password) => {
  const url = createUserURL;
  const data = {
    phoneNo: number,
    hash: hash,
    OTP: OTP,
    userData: userData,
    password: password,
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
