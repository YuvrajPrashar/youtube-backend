import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_SECRET,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uplaodOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // upload on cloudinary

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // file uploaded successfully
    console.log("File uploaded successfully ", response.url);
    return response;
  } catch (error) {
    fs.unlink(localFilePath); //removing the local files
    return null;
  }
};

export { uplaodOnCloudinary };
