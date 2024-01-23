"use client";
import {
  CreateTutorialAPI,
  CreateTutorialDetailAPI,
  FetchTutorialTitleAPI,
} from "@/API/Tutorial/TutorialAPI";
import { storage } from "@/config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-hot-toast";
import { v4 } from "uuid";
import { useAppStore } from "./UseStoreContext";
const useTutorialContext = createContext();
export function UseTutorialContexProvider({ children }) {
  const { handleGenerateRandomString } = useAppStore();
  //----------------------------All Tutorial State //----------------------------
  const [TutTitleAll, setTutTitleAll] = useState({
    data: [],
    isLoading: true,
    error: null,
    count: 0,
    totalPages: 0,
  });

  const createTutorial = async (Datat) => {
    try {
      const res = await CreateTutorialAPI(Datat);
      if (!res?.isSuccess) {
        return toast.error(res?.error);
      }
      handleGenerateRandomString();
      return toast.success(res?.message);
    } catch (error) {
      return toast.error(
        error?.response ? error?.response?.data?.error : error?.message
      );
    }
  };

  const createTutorialDetail = async (Datat) => {
    try {
      const res = await CreateTutorialDetailAPI(Datat);
      if (!res?.isSuccess) {
        return toast.error(res?.error);
      }
      handleGenerateRandomString();
      return toast.success(res?.message);
    } catch (error) {
      return toast.error(
        error?.response ? error?.response?.data?.error : error?.message
      );
    }
  };

  const fetchTutorialTitle = async (data) => {
    try {
      setTutTitleAll({
        data: [],
        isLoading: true,
        error: null,
        count: 0,
        totalPages: 0,
      });
      const TutTitleData = await FetchTutorialTitleAPI(data);
      return setTutTitleAll({
        data: TutTitleData?.TutorialData,
        isLoading: false,
        count: TutTitleData?.tutorialCount,
        totalPages: TutTitleData?.totalPages,
      });
    } catch (error) {
      setTutTitleAll({
        data: [],
        isLoading: false,
        count: 0,
        error: error.message,
        totalPages: 0,
      });
      return toast.error(
        error?.response ? error?.response?.data?.errorMsg : error?.message
      );
    }
  };

  // ------------------------ Firebase Prodct Upload ------------------------
  const UploadFileToFirebase = async (file, path) => {
    try {
      const imageRef = ref(storage, path);
      await uploadBytes(imageRef, file[0]);
      const fileURL = await getDownloadURL(imageRef);
      return fileURL;
    } catch (error) {
      return { error: error.message };
    }
  };

  // ------------------------ Upload Thmbnail data Link------------------------
  const handleUploadThumbnail = async (imagesFile, title, fileName) => {
    try {
      const thumbnailURL = await UploadFileToFirebase(
        imagesFile,
        `Tutorial/${title}/thumbnail/${fileName}`
      );
      toast.success("Files Uploaded!");
      return thumbnailURL;
    } catch (error) {
      return toast.error(error.message);
    }
  };

  return (
    <useTutorialContext.Provider
      value={{
        createTutorial,
        handleUploadThumbnail,
        TutTitleAll,
        fetchTutorialTitle,
        createTutorialDetail,
      }}
    >
      {children}
    </useTutorialContext.Provider>
  );
}

export function useTutorial() {
  return useContext(useTutorialContext);
}
