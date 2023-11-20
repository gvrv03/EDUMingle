import Footer from "@/Components/Footer";
import Category from "@/Components/Home/Category";
import Catlog from "@/Components/Home/Catlog";
import Contact from "@/Components/Home/Contact";
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
        
        <Catlog/>
        {/* <RecentlyViewed /> */}
        <TopProduct />
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
