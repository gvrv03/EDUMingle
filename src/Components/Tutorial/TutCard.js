import Image from "next/image";
import Link from "next/link";

export default function TutCard(props) {
  const { description, image, id, fullTitle, Keywords } = props ? props : {};
  return (
    <div className="w-full  p-2   border  bg-white  md:w-auto ">
      <div className=" rounded-sm">
        <div className={`    grid place-items-center backImage`}>
          <Image
            src={image}
            className=" bg-white  bg-cover object-cover"
            loading="lazy"
            width={200}
            height={400}
            alt={fullTitle}
          />
        </div>
        <div className="p-2 ">
          {/* <h6 className="title-font  text-[10px] text-gray-400 md:text-xs  font-semibold   mb-3">
            {Keywords}
          </h6> */}
          <h1 className="title-font text-center text-xs md:text-sm font-bold   mb-3">
            {fullTitle}
          </h1>

          <div className="flex items-center flex-wrap ">
            <Link
              href={{
                pathname: `/Tutorial/` + id,
                // search: "?ID=" + id,
              }}
              className=" bg-blue-50 p-2 w-full rounded-full text-center grid place-items-center font-semibold text-indigo-500  items-center text-xs md:text-sm   md:mb-2 lg:mb-0"
            >
              <span className=" flex items-center" >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
