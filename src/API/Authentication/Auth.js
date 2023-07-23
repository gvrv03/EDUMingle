import axios from "axios";
import {
  checkUserExistURL,
  checkUserURL,
  RegisterUserURL,
  Fast2SMSURL,
  SendSMSToUserURL,
  signInUserURL,
} from "@/helper/allLinks";

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

  return await res?.json();
};

//------------------Send Via API------------------
export const SendSMSToUser = async (number) => {
  const url = SendSMSToUserURL;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ phoneNo: number }),
  });

  return await res?.json();
};

//------------------Sign in User------------------
export const SignIn = async (email, password) => {
  const url = signInUserURL;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  return await res?.json();
};

//------------------Update User------------------
export const UpdateUser = async (ID, userData) => {
  const url = RegisterUserURL;
  const res = await fetch(url, {
    method: "PUT",
    body: JSON.stringify({ ID, userData }),
  });
  return await res?.json();
};

//------------------Check ser Exists------------------
export const checkUserExists = async (number, email) => {
  const url = checkUserExistURL;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ phoneNo: number, email }),
  });

  return await res?.json();
};

//------------------Create new User------------------
export const createUser = async (number, hash, OTP, userData, password) => {
  const url = RegisterUserURL;
  const dataUser = {
    phoneNo: number,
    hash: hash,
    OTP: OTP,
    userData: userData,
    password: password,
  };
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(dataUser),
  });
  return await res?.json();
};

//------------------Check User------------------
export const checkUser = async (token) => {
  const url = checkUserURL;
  const data = {
    token: token,
  };
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return await res?.json();
};
