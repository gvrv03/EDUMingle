import {
  checkUserExistURL,
  checkUserURL,
  createUserURL,
  Fast2SMSURL,
  SendSMSToUserURL,
  signInUserURL,
} from "@/helper/allLinks";
import axios from "axios";

//------------------Send Via Fast 2 SMS------------------
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

//------------------Send Via API------------------
export const SendSMSToUser = async (number) => {
  const url = SendSMSToUserURL;
  const res = await axios.post(url, { phoneNo: number });
  return res;
};

//------------------Sign in User------------------
export const SignIn = async (email, password) => {
  const url = signInUserURL;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });
  console.log(email, password);

  return await res.json();
};

//------------------Check ser Exists------------------
export const checkUserExists = async (number, email) => {
  const url = checkUserExistURL;
  const res = await axios.post(url, { phoneNo: number, email });
  return res;
};

//------------------Create new User------------------
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

//------------------Check User------------------
export const checkUser = async (token) => {
  const url = checkUserURL;
  const data = {
    token: token,
  };
  const res = await axios.post(url, data);
  return await res?.data;
};
