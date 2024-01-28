import React from "react";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import axios from "axios";
import { TutorialURL } from "@/helper/allLinks";
import Image from "next/image";
import moment from "moment";
const DetailHome = async ({ subTitleID ,router}) => {
  const url = TutorialURL;
  const { data } = await axios.get(url + "/" + subTitleID);
  return (
    <div className="bg-white  md:mt-0 mt-16 p-2">
      <div className="p-2  text-xl font-bold font-sans flex items-center gap-2">
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
        {data?.Title}
      </div>
      <div className="font-semibold p-5" > Date: {moment(data?.createdAt).format("DD/MM/YYYY")}</div>{" "}
      <div className="w-full p-10 bg-gray-50 grid place-items-center">
        <Image width={500} height={500} src={data?.Thumbnail} />
      </div>{" "}
      <div className="mt-5 p-5 font-semibold">{data?.Description}</div>
      <div className="mt-5 p-5 font-semibold">{data?.Keywords}</div>
    </div>
  );
};

export default DetailHome;
