"use client";
import DefaultBTN from "@/Components/Utility/DefaultBTN";
import { useAppStore } from "@/Context/UseStoreContext";
import { useTutorial } from "@/Context/UseTutorialContext";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TextEditor from "../TextEditor";

const TutDetails = () => {
  const [TutArtical, setTutArtical] = useState("");
  const [SubTitle, setSubTitle] = useState("");
  const { refresh } = useAppStore();
  const { TutTitleAll, fetchTutorialTitle, createTutorialDetail } =
    useTutorial();
  const [loading, setloading] = useState(false);
  const [TutTitle, setTutTitle] = useState("");
  useEffect(() => {
    fetchTutorialTitle({
      page: 1,
      limit: 100,
    });
  }, [refresh]);

  const handleCreateArtical = async (e) => {
    e.preventDefault();
    setloading(true);
    if (!TutArtical || !SubTitle || !TutTitle) {
      setloading(false);
      return toast.error("Fill all the Fields!");
    }

    await createTutorialDetail({ TutArtical, SubTitle, TutTitle });
    setloading(false);
  };

  return (
    <form className="flex flex-col gap-2  md:gap-5">
      <div className="flex gap-2  md:gap-5">
        <select
          type="text"
          onChange={(e) => {
            setTutTitle(e.target.value);
          }}
          className=" p-2 rounded-md w-full border outline-none  "
        >
          <option value="">--------Select--------</option>
          {TutTitleAll?.data?.map((item, index) => {
            return (
              <option value={item._id} key={index}>
                {item.Title}
              </option>
            );
          })}
        </select>
        <DefaultBTN
          btnStyle="pBtn px-10 py-1 rounded-md"
          func={handleCreateArtical}
          loading={loading}
          nameBtn="Create"
        />
      </div>
      <input
        type="text"
        onChange={(e) => {
          setSubTitle(e.target.value);
        }}
        className=" p-2 rounded-md w-full border outline-none  "
        placeholder="Sub Title"
      />
      <div className="w-full overflow-scroll no-scrollbar">
        <TextEditor
          width="100%"
          height="30vh"
          artical={TutArtical}
          setartical={setTutArtical}
        />
      </div>
    </form>
  );
};

export default TutDetails;
