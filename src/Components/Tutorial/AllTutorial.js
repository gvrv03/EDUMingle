import { TutorialURL } from "@/helper/allLinks";
import Image from "next/image";

import React from "react";
import Pegination from "../Utility/Pegination";
import TutCard from "./TutCard";

export default async function AllTutorial({ page, setpage }) {
  const res = await fetch(TutorialURL + `?page=${page}&limit=10`);
  const { TutorialData, totalPages } = await res.json();
  if (TutorialData === undefined) {
    return (
      <div className="h-screen w-full grid place-items-center  bg-white ">
        Error occuured
      </div>
    );
  }
  return (
    <>
      {TutorialData?.length === 0 && (
        <div className="w-full h-90 grid place-items-center bg-white mt-5">
          No Tutorial Found
        </div>
      )}
      <section className="grid  grid-cols-2 mt-10 md:mt-0 md:grid-cols-5 w-full gap-5">
        {TutorialData &&
          TutorialData?.map((i, index) => {
            return (
              <TutCard
                key={index}
                description={i?.Description}
                Keywords={i?.Keywords}
                image={i?.Thumbnail}
                id={i?._id}
                fullTitle={i?.Title}
              />
            );
          })}
      </section>
      <Pegination page={page} totalPages={totalPages} setpage={setpage} />
    </>
  );
}
