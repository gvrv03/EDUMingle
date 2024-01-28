import initDB from "@/helper/initDB";
import Tutorial from "@/Modal/Tutorial";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
initDB();

// to fetch single Blog

export const GET = async ({ params }, props) => {
  try {
    const getTut = await Tutorial.findOne({
      _id: props?.params?.tid,
    });
    revalidatePath("/");
    return NextResponse.json(getTut);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      isSuccess: false,
    });
  }
};
