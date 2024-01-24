"use client";
import Gist from "react-gist";
export default function CodeBlock({ gistid, file }) {
  return (
    <div>
      <Gist id={gistid} file={file} />
    </div>
  );
}
