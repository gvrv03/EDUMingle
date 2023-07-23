"use client";
import { useCallback, useContext } from "react";
import { createContext } from "react";
import baseUrl from "@/helper/baseUrl";
import { useEffect } from "react";
import { useState } from "react";
import {
  checkAuthorized,
  checkUser,
  checkUserExists,
  createUser,
  SendSMSToUser,
  SignIn,
  UpdateUser,
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
    if (res?.isSuccess) {
      setOTPHash(res?.hash);
      setotpSend(true);
      startTimer();
      return toast.success(res?.message);
    }
    return toast.error(res?.message);
  };

  //------------------Check User Exists------------------
  const isUserExist = async (phone, email) => {
    try {
      const response = await checkUserExists(phone, email);
      if (response?.isUnique) {
        return await sendSMS(phone);
      }
    } catch (error) {
      return toast.error(error?.response?.data?.errorMsg);
    }
  };

  //------------------Sign In User------------------
  const signInUser = async (email, password) => {
    try {
      const response = await SignIn(email, password);
      if (response?.isSuccess) {
        localStorage.setItem("token", response?.token);
        localStorage.setItem("id", response?.userID);
        localStorage.setItem("userRole", response?.userRole);
        await fetchUserDetail(response?.token);
        setsignInModal(false);
        return toast.success(response?.message);
      }
    } catch (error) {
      return toast.error(error?.response?.data?.errorMsg);
    }
  };

  //-------------------Sign Out User -------------------
  const signOut = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("id");
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
        localStorage.setItem("id", res?.userID);
        localStorage.setItem("userRole", res?.userRole);
        await fetchUserDetail(res?.token);
        setotpSend(false);
        setsignInModal(false);
        return toast.success(res?.message);
      }
    } catch (error) {
      return toast.error(error?.response?.data?.errorMsg);
    }
  };

  //-------------------Update A User -------------------
  const updateUserDetail = async (id, userData) => {
    try {
      const res = await UpdateUser(id, userData,userDetails?.token);
      if (res?.isSuccess) {
        await fetchUserDetail(userDetails?.token);
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
      localStorage.setItem("id", res?.User?._id);
      localStorage.setItem("userRole", res?.User?.role);
      setuserDetails({ ...res });
    } catch (error) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src="/img/maleUser.svg"
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1 ">
                <p className="mt-1 text-sm text-gray-500">
                  Hey, <span>User</span>
                </p>{" "}
                <p className="mt-1 text-sm text-gray-500">
                  You need To Login Again
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => {
                signOut();
                toast.dismiss(t.id);
                setsignInModal(true);
              }}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </div>
      ));
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
        updateUserDetail,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
