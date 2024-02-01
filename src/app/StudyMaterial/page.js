import dynamic from "next/dynamic";
// const CodeBlock = dynamic(() => import("../../Components/Utility/CodeBlock"), {
//   ssr: false,
//   loading: () => <p>Loading</p>,
// });
import { Document, Page } from 'react-pdf';
export default function Home() {
  return (
    <div className="w-full h-screen">
      {/* <iframe
        src="https://gvrvnarnaware.vercel.app/GauravCV.pdf"
        frameborder="0"
        className="w-[50%] h-full"
      /> */}
      <div>
        <Document file="https://gvrvnarnaware.vercel.app/GauravCV.pdf">
          <Page pageNumber={1} />
        </Document>
      </div>
      {/* <CodeBlock gistid="9d2bd56a7da1b2ec186009e695bd7fc5" /> */}
    </div>
  );
}
