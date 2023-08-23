import React from "react";
import Link from "next/link";
import NotFound from "../not-found";
import { getSingleBlogURL } from "@/helper/allLinks";
import BlogDetail from "@/Components/BlogComp/BlogDetail";

export async function generateMetadata({ searchParams }) {
  // fetch data
  const data = await fetch(getSingleBlogURL + searchParams.ID).then((res) =>
    res.json()
  );

  const { title, category, keywords, description, image, author, _id } = data
    ? data
    : {};

  let metatitle = title?.replaceAll(" ", "_");
  return {
    title: title,
    description: description,
    author: author,
    keywords: keywords,
    category: category,
    images: [image],
    url: "/Blogs/Blog/" + metatitle + "?ID=" + _id,
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      author: author,
      keywords: keywords,
      category: category,
      images: [image],
      url: "/Blogs/Blog/" + metatitle + "?ID=" + _id,
    },
    openGraph: {
      title: title,
      description: description,
      author: author,
      keywords: keywords,
      category: category,
      images: [image],
      url: "/Blogs/Blog/" + metatitle + "?ID=" + _id,
    },

    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const page = async ({ searchParams }) => {
  const res = await fetch(getSingleBlogURL + searchParams.ID);
  const data = await res.json();
  const { title, category, description, image, artical, author, views } = data
    ? data
    : {};
  if (artical === undefined) {
    return (
      <div className="bg-white h-full ">
        <NotFound />
      </div>
    );
  }
  return (
    <>
      <div className="bg-white h-full p-5   w-full  ">
        <div className="">
          <section className="">
            <h1 className="font-bold text-lg md:text-3xl">{title}</h1>
            <div className="mt-5 flex justify-between text-sm">
              <div>
                <span className="font-semibold mr-2">Author:</span>
                {author}
              </div>
              <div>
                {" "}
                <i className=" bi bi-eye-fill mr-2"></i> {views}{" "}
              </div>
            </div>
          </section>

<hr className="mt-5" />
          <section className="mt-5 bg-white ">
            <img src={image} alt={title} />
            <BlogDetail artical={artical} />
          </section>
        </div>
      </div>
    </>
  );
};

export default page;
