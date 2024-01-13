import initDB from "@/helper/initDB";
import RootAuth from "@/Middleware/RootAuth";
import Tutorial from "@/Modal/Tutorial";
import TutorialDetails from "@/Modal/TutorialDetails";
import { Subtitles } from "@mui/icons-material";
import { revalidatePath } from "next/cache";
initDB();

import { NextResponse } from "next/server";
export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    let SubTitles = [];
    const searchParams = new URLSearchParams(url.search);
    const query = searchParams.get("query"); // Retrieves the value of the 'query' parameter  Ex : ?query={"_id":"649ec1dc0227a5b8da286425"}
    const TutorialData = await TutorialDetails.find(JSON.parse(query));
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
