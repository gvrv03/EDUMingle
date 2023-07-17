import initDB from "@/helper/initDB";
import User from "@/Modal/User";
initDB();

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const Data = await request.json();
    const { phoneNo,OTP } = Data;

    
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
        isSuccess: true,
        message: result.message[0],
      });
    }

    return NextResponse.json({
      isSuccess: false,
      message: result.message,
    });
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
