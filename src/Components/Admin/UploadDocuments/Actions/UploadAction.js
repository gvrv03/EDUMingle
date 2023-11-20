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

const uploadDataToCloudinary = async (file) => {
  const multipleData = file.map((file) =>
    cloudinary.v2.uploader.upload(file.filepath)
  );
  return await Promise.all(multipleData);
};

export const uploadData = async (data) => {
  try {
    const newFiles = await saveDataToLocal(data);
    const photos = await uploadDataToCloudinary(newFiles);
    newFiles.map((file) => fs.unlink(file.filepath));
    revalidatePath("/")
    return { msg: "Upload Success!" };
  } catch (error) {
    return { errorMsg: error.message };
  }
};
