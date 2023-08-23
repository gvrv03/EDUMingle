import { BlogsURL } from "@/helper/allLinks";
import React from "react";
import Pegination from "../Utility/Pegination";

import BlogCard from "./BlogCard";

export default async function AllBlogs({ page, setpage }) {
  const res = await fetch(BlogsURL + `?page=${page}&limit=10`);
  const Data = (await res.json()) ? res.json() : {};

  if (Data?.blogs === undefined) {
    return (
      <div className="h-screen w-full grid place-items-center  bg-white ">
        Error occuured
      </div>
    );
  }
  return (
    <>
      {Data?.blogs?.length === 0 && (
        <div className="w-full h-90 grid place-items-center bg-white mt-5">
          No Blogs Found
        </div>
      )}
      <section className="grid  grid-cols-2 mt-10 md:mt-0 md:grid-cols-5 w-full gap-5">
        {Data?.blogs?.map((i, index) => {
          return (
            <BlogCard
              key={index}
              fullTitle={i.title}
              title={i.title.substring(0, 32) + "..."}
              category={i.category}
              description={i.description.substring(0, 60) + "..."}
              image={i.image}
              id={i._id}
              views={i.views}
            />
          );
        })}
      </section>
      <Pegination page={page} totalPages={Data?.totalPages} setpage={setpage} />
    </>
  );
}
