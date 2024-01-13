import Image from "next/image";
import Link from "next/link";

export default function TutCard(props) {
  const { description, image, id, fullTitle, Keywords } = props ? props : {};
  return (
    <div className="w-full    border  bg-white  md:w-auto ">
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
          <h6 className="title-font  text-[10px] text-gray-400 md:text-xs  font-semibold   mb-3">
            {Keywords}
          </h6>
          <h1 className="title-font text-xs md:text-sm font-bold   mb-3">
            {fullTitle}
          </h1>
          <p className="leading-relaxed text-justify mb-3 text-[10px] md:text-sm  text-gray-600">
            {description}
          </p>
          <div className="flex items-center flex-wrap ">
            <Link
              href={{
                pathname: `/Tutorial/` + id,
                // search: "?ID=" + id,
              }}
              className="text-indigo-500 inline-flex items-center text-xs md:text-sm   md:mb-2 lg:mb-0"
            >
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
