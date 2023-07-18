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
    console.log(res);

    if (res) {
      const getUser = await User.findById(res?.id);
      return NextResponse.json(
        {
          isSuccess: true,
          isLogin: true,
          isAdmin: getUser.role === process.env.ADMIN_KEY ? true : false,
          isRoot: getUser.role === process.env.ROOT_KEY ? true : false,
          User: getUser,
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
