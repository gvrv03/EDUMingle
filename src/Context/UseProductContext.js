"use client";
import { AddProduct, fetchProductsAPI } from "@/API/Products/ProductAPI";
import { useCallback, useContext } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/config/firebase";
import { v4 } from "uuid";
import { useAppStore } from "./UseStoreContext";
const useProductContext = createContext();
export function UseProductContexProvider({ children }) {
  const { setAllProducts } = useAppStore();
  const fetchProducts = async (data) => {
    try {
      setAllProducts({
        data: [],
        isLoading: true,
        error: null,
        count: 0,
        totalPages: 0,
      });
      const productData = await fetchProductsAPI(data);
      return setAllProducts({
        data: productData?.products,
        isLoading: false,
        count: productData?.ProductCount,
        totalPages: productData?.totalPages,
      });
    } catch (error) {
      setAllProducts({
        data: [],
        isLoading: false,
        count: 0,
        error: error?.message,
        totalPages: 0,
      });
      return toast.error(error?.message);
    }
  };
  // For Add An Product  TO  DB

  const createProduct = async (data) => {
    try {
      const res = await AddProduct(data);
      console.log(res);
      if (!res?.isSuccess) {
        return toast.error(res?.error);
      }
      return toast.success(res?.message);
    } catch (error) {
      return toast.error(
        error?.response ? error?.response?.data?.error : error?.message
      );
    }
  };

  // ------------------------ Firebase Prodct Upload ------------------------
  const UploadFileToFirebase = async (file, path) => {
    try {
      const imageRef = ref(storage, path);
      await uploadBytes(imageRef, file);
      const fileURL = await getDownloadURL(imageRef);
      return fileURL;
    } catch (error) {
      return { error: error.message };
    }
  };

  // ------------------------ Firebase Images Upload ------------------------
  const uploadMultipleFilesToFirebase = async (files, path) => {
    const urls = [];

    for (const file of files) {
      const imageName = file.name + v4();
      const imageRef = ref(storage, `${path}/${imageName}`);
      try {
        await uploadBytes(imageRef, file);
        const downloadURL = await getDownloadURL(imageRef);
        urls.push(downloadURL);
      } catch (error) {
        return { error: error.message };
      }
    }
    return urls;
  };

  // ------------------------ Upload File data Link------------------------
  const handleUploadFiles = async (
    imagesFile,
    productFile,
    thumbnailFile,
    title
  ) => {
    try {
      const resProductURL = await UploadFileToFirebase(
        productFile.file,
        `Product/${title}/ProductFile/${productFile.name}`
      );
      const resThumbnailURL = await UploadFileToFirebase(
        thumbnailFile.file,
        `Product/${title}/Thumbnail/${thumbnailFile.name}`
      );
      const resImagesURL = await uploadMultipleFilesToFirebase(
        imagesFile,
        `Product/${title}/Images`
      );

      toast.success("Files Uploaded!");
      return { resImagesURL, resProductURL, resThumbnailURL };
    } catch (error) {
      return toast.error(error.message);
    }
  };

  return (
    <useProductContext.Provider
      value={{
        fetchProducts,
        UploadFileToFirebase,
        uploadMultipleFilesToFirebase,
        createProduct,
        handleUploadFiles,
      }}
    >
      {children}
    </useProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(useProductContext);
}
