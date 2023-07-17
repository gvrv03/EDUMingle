"use client";
import { useUserAuth } from "@/Context/UserAuthContext";
import { useAppStore } from "@/Context/UseStoreContext";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DefaultBTN from "../Utility/DefaultBTN";
const Authentication = () => {
  const { signInModal, setsignInModal } = useAppStore();
  const [userOTP, setuserOTP] = useState("");
  const [loading, setloading] = useState(false);
  const [phoneNo, setphoneNo] = useState("");
  const { sendSMS, otpSend, createNewUser, timer, isTimerRunning, resendOTP } =
    useUserAuth();

  const sendOTPtoUser = async () => {
    setloading(true);
    if (phoneNo.length < 9) {
      toast.error("Enter the number");
      return setloading(false);
    }
    await sendSMS(phoneNo);
    return setloading(false);
  };

  const verifyOTP = async () => {
    setloading(true);
    if (!userOTP) {
      toast.error("Enter the OTP");
      return setloading(false);
    }
    await createNewUser(parseInt(userOTP),phoneNo);
    return setloading(false);
  };
  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      aria-hidden="true"
      className={`${
        signInModal ? "fixed" : "hidden"
      }  w-full h-screen grid place-items-center  top-0 left-0  z-50 `}
    >
      <div className="bg-black absolute w-full h-full  opacity-50" />
      {/* <!-- Modal content --> */}
      <div className=" md:relative absolute bg-white p-5  transition-all delay-200 ease-linear  w-full md:w-[400px]  md:bottom-auto  bottom-0   rounded-t-lg md:rounded-lg shadow ">
        {/* <!-- Modal header --> */}
        <div className="flex items-center    justify-between mb-5  pb-2 border-b rounded-t">
          <h3 className=" text-lg font-semibold text-gray-900 ">Sign In Now</h3>
          <button
            type="button"
            onClick={() => {
              setsignInModal(false);
            }}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
            data-modal-hide="defaultModal"
          >
            <i className="uil uil-times text-xl" />
          </button>
        </div>
        {/* <!-- Modal body --> */}
        <div className=" flex flex-col gap-5 ">
          <div className=" rounded-md overflow-hidden  ">
            <img
              src="https://img.ebonow.com/Posters/P6C.webp"
              className="w-full "
              alt=""
            />
          </div>

          <div>
            <PhoneInput
              country={"in"}
              onlyCountries={["in"]}
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
                  className="p-2 w-full outline-none py-3 "
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
                nameBtn="Verify OTP"
                func={verifyOTP}
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

          <p className="text-gray-500">
            By clicking on Login, I accept the{" "}
            <span className="pColor font-semibold">Terms & Conditions </span> &{" "}
            <span className="pColor font-semibold">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
