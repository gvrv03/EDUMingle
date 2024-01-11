import initDB from "@/helper/initDB";
import RootAuth from "@/Middleware/RootAuth";
import Tutorial from "@/Modal/Tutorial";
import { revalidatePath } from "next/cache";
initDB();

import { NextResponse } from "next/server";

// --------------To Add Tutorial Title --------------
export const POST = RootAuth(async (request) => {
  try {
    const Data = await request.json();
    const { Title, Description, Keywords } = Data;

    if (!Title || !Description || !Keywords) {
      throw new Error("Fill all the Fields!");
    }

    const titleExist = await Tutorial.findOne({ Title });
    if (titleExist) {
      const updateTut = await Tutorial.findOneAndUpdate({ Title }, Data);

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
    const addTutorial = await Tutorial.create(Data);
    revalidatePath("/");

    return NextResponse.json(
      {
        data: addTutorial,
        message: "Tutorial Added Successfully",
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

// --------------To Fetch All Tutorial Title--------------
export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const page = searchParams.get("page"); // Retrieves the value of the 'page' parameter
    const limit = searchParams.get("limit"); // Retrieves the value of the 'limit' parameter
    const query = searchParams.get("query"); // Retrieves the value of the 'query' parameter  Ex : ?query={"_id":"649ec1dc0227a5b8da286425"}

    const skipCount = (page - 1) * limit;
    const tutorialCount = await Tutorial.countDocuments(); // Get the total count of blogs
    const totalPages = Math.ceil(tutorialCount / limit); // Calculate the total number of pages

    const TutorialData = await Tutorial.find(JSON.parse(query))
      .sort({ createdAt: -1 })
      .skip(skipCount)
      .limit(limit);
    return NextResponse.json({ TutorialData, totalPages, tutorialCount });
  } catch (error) {
    return NextResponse.json({
      data: null,
      error: error.message,
      isSuccess: false,
    });
  }
};
