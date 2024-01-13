import initDB from "@/helper/initDB";
import TutorialDetails from "@/Modal/TutorialDetails";
import { NextResponse } from "next/server";
initDB();

// to fetch single Blog

export const GET = async ({ params }, props) => {
  try {
    console.log(props);
    const getTut = await TutorialDetails.findOne({
      _id: props?.params?.pid,
    }).populate("TutTitle");
    return NextResponse.json(getTut);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      isSuccess: false,
    });
  }
};
