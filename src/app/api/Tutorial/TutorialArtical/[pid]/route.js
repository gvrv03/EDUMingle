import initDB from "@/helper/initDB";
import TutorialDetails from "@/Modal/TutorialDetails";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
initDB();

// to fetch single Blog

export const GET = async ({ params }, props) => {
  try {
    const getTut = await TutorialDetails.findOne({
      _id: props?.params?.pid,
    }).populate("TutTitle");
    revalidatePath("/");
    return NextResponse.json(getTut);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      isSuccess: false,
    });
  }
};
