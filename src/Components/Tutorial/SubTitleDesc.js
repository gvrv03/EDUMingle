import NotFound from "@/app/Tutorial/[slug]/not-found";
import { TutorialDescURL } from "@/helper/allLinks";
import axios from "axios";
import React from "react";
import "suneditor/dist/css/suneditor.min.css";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { unstable_noStore } from "next/cache";
import { memo } from "react";
const SubTitleDesc = async ({ subTitleID, router }) => {
  unstable_noStore()
  const res = await axios.get(TutorialDescURL + "/" + subTitleID);
  const data = await res.data;
  if (data?.isSuccess == false) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }
  const { TutArtical, SubTitle, TutTitle } = data ? data : {};
  return (
    <div className="bg-white   mt-10 md:mt-0  md:p-2 p-5  w-full md:w-[70%]  ">
      <div className="">
        <section className="gap-5    flex-col flex   bg-white w-full">
          <section className="">
            <div className=" flex items-center gap-5">
              <IconButton
                onClick={() => {
                  router.push("/Tutorial");
                }}
                style={{ background: "#edf1ff" }}
                aria-label="delete"
                size="small"
              >
                <ChevronLeftIcon fontSize="small" />
              </IconButton>
              <h1 className="font-bold text-lg md:text-3xl">{SubTitle}</h1>
            </div>
            <div className="mt-5 flex justify-between text-sm">
              <div>
                <span className="font-semibold mr-2">Author:</span>
                Gaurav Narnaware
              </div>
              <div>
                <i className=" bi bi-eye-fill mr-2"></i> 10
              </div>
            </div>
            <div className="mt-5 flex gap-2 ">{TutTitle?.Keywords}</div>
          </section>

          <hr className="mt-5" />
          <article
            className="selection:bg-blue-100 selection:text-white se-wrapper-inner text-justify   se-wrapper-wysiwyg sun-editor-editable IMPBGWhite"
            dangerouslySetInnerHTML={{ __html: TutArtical?.toString() }}
          />
        </section>
      </div>
    </div>
  );
};

export default  memo( SubTitleDesc);
