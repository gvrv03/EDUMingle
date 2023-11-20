"use client";
import React from "react";
import {  useFormStatus } from "react-dom";
const SubmitButton = ({ value, ...props }) => {
  const { pending } = useFormStatus();
  return (
    <button className="border p-2 mt-5" type="submit" disabled={pending} {...props}>
      {pending ? "Loading..." : value}
    </button>
  );
};

export default SubmitButton;
