import Footer from "@/Components/Footer";
import Category from "@/Components/Home/Category";
import RecentlyViewed from "@/Components/Home/RecentlyViewed";
import SlideShow from "@/Components/Home/SlideShow";
import TopProduct from "@/Components/Home/TopProduct";
import NavBar from "@/Components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar shadow="drop-shadow-md" position="fixed"  />
      <main className=" flex flex-col  gap-2 ">
        <Category />
        <SlideShow />
        <RecentlyViewed />
        <TopProduct />

      </main>
      <Footer/>
    </>
  );
}
