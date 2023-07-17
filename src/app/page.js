import Category from "@/Components/Home/Category";
import RecentlyViewed from "@/Components/Home/RecentlyViewed";
import SlideShow from "@/Components/Home/SlideShow";
import TopProduct from "@/Components/Home/TopProduct";
import Authentication from "@/Components/Modal/Authentication";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-col gap-5 ">
      <Category/>
      <SlideShow />
      <RecentlyViewed/>
      <TopProduct/>
      <Authentication/>

    </main>
  );
}
