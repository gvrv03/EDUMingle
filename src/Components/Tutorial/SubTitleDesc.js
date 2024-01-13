import { TutorialDescURL } from "@/helper/allLinks";
import axios from "axios";
import React from "react";
import "suneditor/dist/css/suneditor.min.css";

const SubTitleDesc = async ({ subTitleID }) => {
  const res = await axios.get(TutorialDescURL + "/" + subTitleID);
  const data = await res.data;
  const { TutArtical, SubTitle, TutTitle } = data ? data : {};
  return (
    <div className="bg-white     w-full  ">
      <div className="">
        <section className="gap-5   md:flex-row flex-col flex   bg-white w-full">
          <div className="w-full md:w-[70%]">
            <section className="">
              <h1 className="font-bold text-lg md:text-3xl">{SubTitle}</h1>
              <div className="mt-5 flex justify-between text-sm">
                <div>
                  <span className="font-semibold mr-2">Author:</span>
                  Gaurav Narnaware
                </div>
                <div>
                  {" "}
                  <i className=" bi bi-eye-fill mr-2"></i> 10
                </div>
              </div>
              <div className="mt-5 flex gap-2 ">{TutTitle?.Keywords}</div>
            </section>

            <hr className="mt-5" />
            <article
              className="hide-tailwind selection:bg-blue-800 selection:text-white se-wrapper-inner text-justify  se-wrapper-wysiwyg sun-editor-editable IMPBGWhite"
              dangerouslySetInnerHTML={{ __html: data?.TutArtical?.toString() }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SubTitleDesc;
