import Category from "@/Components/Home/Category";
import RecentlyViewed from "@/Components/Home/RecentlyViewed";
import SlideShow from "@/Components/Home/SlideShow";
import TopProduct from "@/Components/Home/TopProduct";

export default function Home() {
  return (
    <main className=" flex flex-col gap-2 ">
      <Category />
      <SlideShow />
      <RecentlyViewed />
      <TopProduct />
    </main>
  );
}
