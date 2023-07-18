import initDB from "@/helper/initDB";
import bcrypt from "bcrypt";
import User from "@/Modal/User";
import jwt from "jsonwebtoken";
initDB();

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const Data = await request.json();
    const { phoneNo, hash, OTP } = Data;
    const checkOTP = await bcrypt.compare(OTP.toString(), hash);
    if (checkOTP) {
      const checkUser = await User.findOne({ phoneNo });
      if (checkUser) {
        return NextResponse.json({
          isSuccess: true,
          userExist: true,
          User: checkUser,
          message: "Login Success",
          token: genToken(checkUser?._id),
        });
      }
      const userAdd = await User.create({
        phoneNo,
        image: "/img/maleUser.svg",
      });
      return NextResponse.json({
        isSuccess: true,
        userExist: false,
        message: "Login Success",
        token: genToken(userAdd?._id),
      });
    }

    throw new Error("Invalid OTP");
  } catch (error) {
    return NextResponse.json(
      {
        isSuccess: false,
        errorMsg: error.message,
      },
      {
        status: 404,
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

const genToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "2160h" });
};
