import initDB from "@/helper/initDB";
import User from "@/Modal/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { Random } from "random-js";

initDB();
const saltRounds = 10;

export async function POST(request) {
  try {
    const Data = await request.json();
    const { phoneNo } = Data;

    const random = new Random();
    const OTP = random.integer(1000, 9999);

    console.log("OTP is: ", OTP);

    const userExist = await User.findOne({ phoneNo });
    const hashedOTP = await bcrypt.hash(OTP.toString(), saltRounds);

    const data = {
      variables_values: OTP.toString(),
      route: "otp",
      numbers: phoneNo,
    };
    const url = `https://www.fast2sms.com/dev/bulkV2`;
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

    if (result.return) {
      return NextResponse.json({
        userExist: userExist ? true : false,
        hash: hashedOTP,
        isSuccess: true,
        message: result.message[0],
      });
    }

    return NextResponse.json({
      isSuccess: false,
      message: result.message,
    });

    // return NextResponse.json({
    //   userExist: userExist ? true : false,
    //   hash: hashedOTP,
    //   isSuccess: true,
    //   message: "OTP Send",
    // });
  } catch (error) {
    return NextResponse.json(
      {
        isSuccess: false,
        error: "Internal Server Error",
        errorMsg: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export const GET = async (request) => {
  try {
    const allUser = await User.find();
    return NextResponse.json(allUser);
  } catch (error) {
    return NextResponse.json(
      { msg: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
};
