import initDB from "@/helper/initDB";
import RootAuth from "@/Middleware/RootAuth";
import Tutorial from "@/Modal/Tutorial";
import TutorialDetails from "@/Modal/TutorialDetails";
import { Subtitles } from "@mui/icons-material";
import { revalidatePath } from "next/cache";
initDB();

import { NextResponse } from "next/server";
export const GET = async ({ params }, props) => {
  try {
    let SubTitles = [];
    const TutorialData = await TutorialDetails.find({
      TutTitle: props?.params?.TutID,
    });
    TutorialData.map((item) => {
      SubTitles.push({
        SubTitle: item?.SubTitle,
        ID: item._id,
        isSuccess: true,
      });
    });
    return NextResponse.json(SubTitles);
  } catch (error) {
    return NextResponse.json({
      data: null,
      error: error.message,
      isSuccess: false,
    });
  }
};
