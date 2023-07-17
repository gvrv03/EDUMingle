"use client";
import { useContext } from "react";
import { createContext } from "react";
import baseUrl from "@/helper/baseUrl";
import { useEffect } from "react";
import { useState } from "react";
import { createUser, SendSMSToUser } from "@/API/Authentication/Auth";
import { toast } from "react-hot-toast";

const userAuthContext = createContext();
export function UserAuthContexProvider({ children }) {
  const [otpSend, setotpSend] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [OTP, setOTP] = useState("");
  console.log(OTP);

  //-------------------SEND SMS to User -------------------
  const sendSMS = async (number) => {
    let generateOTP = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    setOTP(generateOTP);
    const res = await SendSMSToUser(number.slice(2), generateOTP);
    if (res?.data?.isSuccess) {
      setotpSend(true);
      startTimer();
      return toast.success(res?.data?.message);
    }
    return toast.error(res?.data?.message);

    // setotpSend(true);
    // startTimer();
    // return toast.success("OTP Send");
  };

  //-------------------To start Timer-------------------
  const startTimer = () => {
    setIsTimerRunning(true);
    setTimer(59);
  };

  //-------------------Create A User -------------------
  const createNewUser = async (userOTP, number) => {
    if (OTP === userOTP) {
      const res = await createUser(number);
      return toast.success(res?.message);
    }
    return toast.error("Invalid OTP");
  };

  //-------------------Resend OTP-------------------
  const resendOTP = async (number) => {
    await sendSMS(number);
  };

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
        resendOTP,
        createNewUser,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
