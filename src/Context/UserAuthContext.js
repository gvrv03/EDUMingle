"use client";
import { useCallback, useContext } from "react";
import { createContext } from "react";
import baseUrl from "@/helper/baseUrl";
import { useEffect } from "react";
import { useState } from "react";
import {
  checkUser,
  checkUserExists,
  createUser,
  SendSMSToUser,
  SignIn,
} from "@/API/Authentication/Auth";
import { toast } from "react-hot-toast";
import { useAppStore } from "./UseStoreContext";
const userAuthContext = createContext();
export function UserAuthContexProvider({ children }) {
  const { setsignInModal } = useAppStore();
  const [userDetails, setuserDetails] = useState({});
  const [otpSend, setotpSend] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [OTPHash, setOTPHash] = useState("");

  //-------------------SEND SMS to User -------------------
  const sendSMS = async (number) => {
    const res = await SendSMSToUser(number.slice(2));
    if (res?.data?.isSuccess) {
      setOTPHash(res?.data?.hash);
      setotpSend(true);
      startTimer();
      return toast.success(res?.data?.message);
    }
    return toast.error(res?.data?.message);
  };

  const isUserExist = async (phone, email) => {
    try {
      const response = await checkUserExists(phone, email);
      if (response?.data?.isUnique) {
        return await sendSMS(phone);
      }
    } catch (error) {
      return toast.error(error?.response?.data?.errorMsg);
    }
  };

  const signInUser = async (email, password) => {
    try {
      const response = await SignIn(email, password);
      console.log(response);
      if (response?.data?.isSuccess) {
        localStorage.setItem("token", response?.data?.token);
        await fetchUserDetail(response?.data?.token);
        setsignInModal(false);
        return toast.success(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
      return toast.error(error?.response?.data?.errorMsg);
    }
  };

  //-------------------Sign Out User -------------------
  const signOut = async () => {
    localStorage.removeItem("token");
    setuserDetails({});
  };

  //-------------------To start Timer-------------------
  const startTimer = () => {
    setIsTimerRunning(true);
    setTimer(59);
  };

  //-------------------Create A User -------------------
  const createNewUser = async (userOTP, number, userData, password) => {
    try {
      const res = await createUser(
        number,
        OTPHash,
        userOTP,
        userData,
        password
      );
      if (res?.isSuccess) {
        localStorage.setItem("token", res?.token);
        await fetchUserDetail(res?.token);
        setotpSend(false);
        setsignInModal(false);

        return toast.success(res?.message);
      }
    } catch (error) {
      return toast.error(error?.response?.data?.errorMsg);
    }
  };

  //-------------------Resend OTP-------------------
  const resendOTP = async (number) => {
    await sendSMS(number);
  };

  // console.log(userDetails);
  //-------------------get User detail -------------------
  const fetchUserDetail = useCallback(async (token) => {
    try {
      const res = await checkUser(token);
      setuserDetails({ ...res });
    } catch (error) {
      console.log(error?.response?.data.errorMsg);
      toast.error(error?.response?.data.errorMsg);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchUserDetail(localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    let interval;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerRunning(false);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  return (
    <userAuthContext.Provider
      value={{
        sendSMS,
        otpSend,
        timer,
        isTimerRunning,
        signOut,
        resendOTP,
        createNewUser,
        userDetails,
        isUserExist,
        signInUser,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
