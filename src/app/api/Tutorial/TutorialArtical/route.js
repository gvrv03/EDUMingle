import initDB from "@/helper/initDB";
import RootAuth from "@/Middleware/RootAuth";
import TutorialDetails from "@/Modal/TutorialDetails";
initDB();

import { NextResponse } from "next/server";

// --------------To Add Tutorial Desc--------------
export const POST = RootAuth(async (request) => {
  try {
    const Data = await request.json();
    const { TutTitle, SubTitle, TutArtical } = Data;
    
    if (!TutTitle || !SubTitle || !TutArtical) {
      throw new Error("Fill all the Fields!");
    }

    const subTitleExist = await TutorialDetails.findOne({ SubTitle,TutTitle });
    if (subTitleExist) {
      const updateTut = await TutorialDetails.findOneAndUpdate(
        { TutTitle },
        Data
      );

      return NextResponse.json(
        {
          data: updateTut,
          message: "Already Exits, Then Updated",
          isSuccess: true,
        },
        {
          status: 200,
        }
      );
    }
    const addTutorial = await TutorialDetails.create(Data);
    return NextResponse.json(
      {
        data: addTutorial,
        message: "Tutorial Description Added Successfully",
        isSuccess: true,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json({
      data: null,
      error: error?.message,
      isSuccess: false,
    });
  }
});

// --------------To Fetch All Tutorial Description--------------
export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const page = searchParams.get("page"); // Retrieves the value of the 'page' parameter
    const limit = searchParams.get("limit"); // Retrieves the value of the 'limit' parameter
    const query = searchParams.get("query"); // Retrieves the value of the 'query' parameter  Ex : ?query={"_id":"649ec1dc0227a5b8da286425"}

    const skipCount = (page - 1) * limit;
    const tutorialDescCount = await TutorialDetails.countDocuments(); // Get the total count of blogs
    const totalPages = Math.ceil(tutorialDescCount / limit); // Calculate the total number of pages

    const TutorialDescData = await TutorialDetails.find(JSON.parse(query)).populate("TutTitle")
      .sort({ createdAt: -1 })
      .skip(skipCount)
      .limit(limit);

    return NextResponse.json({
      TutorialDescData,
      totalPages,
      tutorialDescCount,
    });
  } catch (error) {
    return NextResponse.json({
      data: null,
      error: error.message,
      isSuccess: false,
    });
  }
};
