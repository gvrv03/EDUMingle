"use client";
import React, { useState } from "react";
import { useUserAuth } from "@/Context/UserAuthContext";
import { toast } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import DefaultBTN from "../Utility/DefaultBTN";
import "react-phone-input-2/lib/style.css";
const Register = () => {
  const [userOTP, setuserOTP] = useState("");
  const [loading, setloading] = useState(false);
  const [phoneNo, setphoneNo] = useState("");
  const {
    sendSMS,
    otpSend,
    isUserExist,
    createNewUser,
    timer,
    isTimerRunning,
    resendOTP,
  } = useUserAuth();
  const [userData, setuserData] = useState({
    gender: "male",
    name: "",
    email: "",
    dob: "",
  });
  const [password, setpassword] = useState("");
  function onChange(e) {
    setuserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  const sendOTPtoUser = async () => {
    setloading(true);
    if (phoneNo.length < 9) {
      toast.error("Enter the number");
      return setloading(false);
    }
    await isUserExist(phoneNo, userData.email);
    return setloading(false);
  };

  const verifyOTP = async () => {
    setloading(true);
    if (!userOTP) {
      toast.error("Enter the OTP");
      return setloading(false);
    }
    await createNewUser(parseInt(userOTP), phoneNo, userData, password);
    return setloading(false);
  };
  return (
    <form
      onSubmit={!otpSend ? sendOTPtoUser : verifyOTP}
      className="flex flex-col gap-5"
      
    >
      <div className="w-full gap-5 flex border rounded-md">
        <select
          onChange={onChange}
          value={userData.gender}
          required={true}
          name="gender"
          className="p-2   text-sm outline-none py-3 "
        >
          <option value="male">Mr.</option>
          <option value="female">Miss.</option>
        </select>
        <input
          type="text"
          required={true}
          onChange={onChange}
          value={userData.name}
          name="name"
          className="p-2 w-full  text-sm outline-none py-3 "
          placeholder="Name"
        />
      </div>
      <div className="w-full border rounded-md">
        <input
          type="email"
          onChange={onChange}
          value={userData.email}
          required={true}
          name="email"
          className="p-2 w-full  text-sm outline-none py-3 "
          placeholder="Email"
        />
      </div>
      <div className="w-full border rounded-md">
        <input
          type="date"
          onChange={onChange}
          required={true}
          value={userData.dob}
          name="dob"
          className="p-2 w-full  text-sm outline-none py-3 "
          placeholder="Email"
        />
      </div>
      <div className="w-full border rounded-md">
        <input
          type="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          value={password}
          required={true}
          name="password"
          className="p-2 w-full  text-sm outline-none py-3 "
          placeholder="Password"
        />
      </div>

      <div>
        <PhoneInput
          country={"in"}
          onlyCountries={["in"]}
          required={true}
          value={phoneNo ? phoneNo : ""}
          onChange={(phone) => setphoneNo(phone)}
        />
      </div>

      {otpSend && (
        <>
          <div className="w-full border rounded-md">
            <input
              type="number"
              onChange={(e) => {
                setuserOTP(e.target.value);
              }}
              className="p-2 w-full  text-sm outline-none py-3 "
              required={true}
              placeholder="Enter OTP"
            />
          </div>
          <div className="w-full">
            <button
              onClick={async () => {
                await resendOTP(phoneNo);
              }}
              disabled={isTimerRunning ? true : false}
              className="pColor font-semibold float-right"
            >
              Reset OTP in : {timer}s
            </button>
          </div>
          <DefaultBTN
            btnStyle=" px-5 py-3  w-full rounded-md pBtn"
            nameBtn="Sign Up"
            loading={loading}
          />
        </>
      )}

      {!otpSend && (
        <DefaultBTN
          btnStyle=" px-5 py-3  w-full rounded-md pBtn"
          nameBtn="Send OTP"
          func={sendOTPtoUser}
          loading={loading}
        />
      )}

      <div className="text-gray-500 text-base text-justify ">
        By clicking on Login, I accept the{" "}
        <span className="pColor font-semibold">Terms & Conditions </span> &{" "}
        <span className="pColor font-semibold">Privacy Policy</span>
      </div>
    </form>
  );
};

export default Register;
