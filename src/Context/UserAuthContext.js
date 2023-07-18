"use client";
import { useCallback, useContext } from "react";
import { createContext } from "react";
import baseUrl from "@/helper/baseUrl";
import { useEffect } from "react";
import { useState } from "react";
import {
  checkUser,
  createUser,
  SendSMSToUser,
} from "@/API/Authentication/Auth";
import { toast } from "react-hot-toast";
const userAuthContext = createContext();
export function UserAuthContexProvider({ children }) {
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

  //-------------------SEND SMS to User -------------------
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
  const createNewUser = async (userOTP, number) => {
    try {
      const res = await createUser(number, OTPHash, userOTP);
      if (res?.isSuccess) {
        localStorage.setItem("token", res?.token);
        await fetchUserDetail(res?.token);
        setotpSend(false);
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

  console.log(userDetails);
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
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
