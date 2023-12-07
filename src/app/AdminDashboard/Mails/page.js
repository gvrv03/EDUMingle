"use client";
import { SendEmailAPI } from "@/API/Email/SendMail";
import TextEditor from "@/Components/Admin/TextEditor";
import { useAppStore } from "@/Context/UseStoreContext";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const page = () => {
  const [EditorData, setEditorData] = useState("");
  const [singleUserEmail, setSingleUserEmail] = useState("");
  const [userEmail, setUserEmail] = useState([]);
  const [userSubject, setUserSubject] = useState("");
  const [loading, setloading] = useState(false);
  const { sendEmail } = useAppStore();
  const handleSendEmail = async (e) => {
    e.preventDefault();
    setloading(true);
    await sendEmail({
      userEmails: userEmail,
      subject: userSubject,
      emailData: EditorData,
    });
    setloading(false);
  };

  const addEmails = (emails) => {
    setUserEmail([...userEmail, emails]);
  };
  const removeSpecificEmails = (email) => {
    setUserEmail(userEmail.filter((currentEmail) => currentEmail !== email));
  };
  console.log(singleUserEmail);
  console.log(userEmail);
  return (
    <div className=" bg-white p-5 flex-col flex gap-5  ">
      <h6>Send Mails</h6>

      <div className="flex flex-col gap-5 ">
        <div>
          <div className="flex gap-5 justify-center  items-center">
            <input
              type="text"
              onChange={(e) => {
                setSingleUserEmail(e.target.value);
              }}
              value={singleUserEmail ? singleUserEmail : ""}
              className="     outline-none  border p-2 text-sm w-full  "
              placeholder="Email"
            />
            <button
              className="border bg-red-600 p-2 w-12 "
              type="button"
              disabled={!userEmail ? true : false}
              onClick={() => {
                addEmails(singleUserEmail);
                setSingleUserEmail("");
              }}
            >
              <i className=" text-white font-semibold uil uil-import" />
            </button>
            <button
              className="border bg-red-600 p-2 w-12 "
              type="button"
              disabled={!userEmail ? true : false}
              onClick={() => {
                addEmails(singleUserEmail);
                setSingleUserEmail("");
              }}
            >
              <i className=" text-white font-semibold uil uil-plus" />
            </button>
          </div>
          <div
            className={`mt-5       gap-2  flex-wrap p-2 ${
              userEmail.length === 0 ? "hidden" : "flex"
            }`}
          >
            {userEmail &&
              userEmail.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="text-xs bg-gray-100  rounded-sm p-2  "
                  >
                    {item}{" "}
                    <button
                      className="hover:bg-gray-100   rounded-sm"
                      onClick={() => {
                        removeSpecificEmails(item);
                      }}
                    >
                      <i className="bi bi-x-lg font-bold p-1 " />
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <textarea
        onChange={(e) => {
          setUserSubject(e.target.value);
        }}
        type="text"
        placeholder="subject"
        className="     outline-none  border p-2 text-sm w-full  "
      />

      <TextEditor
        setartical={setEditorData}
        artical={EditorData}
        height={300}
      />
      <button
        onClick={handleSendEmail}
        type="submit"
        className="pBtn py-2 px-10 "
      >
        {loading ? "Loading..." : "Send"}
      </button>
    </div>
  );
};

export default page;
