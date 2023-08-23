"use client";
import React from "react";
import "suneditor/dist/css/suneditor.min.css";

const BlogDetail = ({ artical }) => {
  return (
    <article
      className="hide-tailwind se-wrapper-inner   se-wrapper-wysiwyg sun-editor-editable IMPBGWhite"
      dangerouslySetInnerHTML={{ __html: artical.toString() }}
    />
  );
};

export default BlogDetail;
