import initDB from "@/helper/initDB";
import bcrypt from "bcrypt";
import User from "@/Modal/User";
import jwt from "jsonwebtoken";
initDB();

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const Data = await request.json();
    const { token } = Data;

    const res = await jwt.verify(token, process.env.JWT_SECRET);
    if (res) {
      const getUser = await User.findById(res?.id);
      return NextResponse.json(
        {
          isSuccess: true,
          isLogin: true,
          User: getUser,
          token: token,
        },
        {
          status: 200,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        isSuccess: false,
        isLogin: false,
        errorMsg: error.message,
      },
      {
        status: 404,
      }
    );
  }
}
