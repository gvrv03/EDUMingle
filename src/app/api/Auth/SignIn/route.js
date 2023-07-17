import initDB from "@/helper/initDB";
import User from "@/Modal/User";
initDB();


import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const Data = await request.json();
    const { phoneNo } = Data;

    const checkUser = await User.findOne({ phoneNo });

    if (checkUser) {
      return NextResponse.json({
        isSuccess: true,
        userExist: true,
        message: "Login Success",
      });
    }

    const userAdd = await User.create({
      phoneNo,
      image: "/img/maleUser.svg",
    });
    return NextResponse.json({
      isSuccess: true,
      User: userAdd,
      userExist: false,
      message: "Login Success",
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
