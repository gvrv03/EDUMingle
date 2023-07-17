import axios from "axios";

export const SendSMSToUser = async (number, OTP) => {
  const url = "http://localhost:3000/api/Auth/SendOTP";

  const res = await axios.post(url, { phoneNo: number, OTP: OTP });

  return res;
};

export const createUser = async (number) => {
  const url = "http://localhost:3000/api/Auth/SignIn";
  const data = {
    phoneNo: number,
  };
  const res = await axios.post(url, data);
  return res?.data;
};
