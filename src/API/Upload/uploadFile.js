"use server";

import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import os from "os";
import cloudinary from "@/config/cloudinary";
import { revalidatePath } from "next/cache";

export const saveDataToLocal = async (formData) => {
  const files = formData.getAll("files");

  const multipleNuffersPromise = files.map((file) =>
    file.arrayBuffer().then((data) => {
      const buffer = Buffer.from(data);
      const name = uuidv4();
      const ext = file.type.split("/")[1];

      const tempDir = os.tmpdir();
      const uploadDir = path.join(tempDir, `/${name}.${ext}`);
      fs.writeFile(uploadDir, buffer);
      return { filepath: uploadDir, filename: file.name };
    })
  );
  return await Promise.all(multipleNuffersPromise);
};

const uploadDataToCloudinary = async (file, path) => {
  const multipleData = file.map((file) =>
    cloudinary.v2.uploader.upload(file.filepath, { folder: path })
  );
  return await Promise.all(multipleData);
};

export const uploadData = async (data, path) => {
  try {
    const newFiles = await saveDataToLocal(data);
    await uploadDataToCloudinary(newFiles, path);
    newFiles.map((file) => fs.unlink(file.filepath));
    revalidatePath("/");
    return { msg: "Upload Success!" };
  } catch (error) {
    return { errorMsg: error.message };
  }
};

export const getImagesfromCloudinary = async () => {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      max_results: 30, 
    });
    return result.resources;
  } catch (error) {
    return { error: error.message };
  }
};
