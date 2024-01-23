import Footer from "@/Components/Footer";
import Category from "@/Components/Home/Category";
import Catlog from "@/Components/Home/Catlog";
import Contact from "@/Components/Home/Contact";
import RecentlyViewed from "@/Components/Home/RecentlyViewed";
import SlideShow from "@/Components/Home/SlideShow";
import TopProduct from "@/Components/Home/TopProduct";
import NavBar from "@/Components/NavBar";
import TopProductSkeleton from "@/Components/Skeleton/TopProductSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <NavBar shadow="drop-shadow-md" position="fixed" />
      <main className=" flex flex-col  no-underline gap-2 ">
        <Category />
        <SlideShow />

        <Catlog />
        <Suspense fallback={<TopProductSkeleton />}>
          <TopProduct />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
