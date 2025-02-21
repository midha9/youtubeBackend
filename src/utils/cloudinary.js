import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Test Upload (Optional)
cloudinary.uploader.upload(
  "testing.jpg",
  { public_id: "olympic_flag" },
  function (error, result) {
    if (error) {
      console.error("Cloudinary Upload Error:", error);
    } else {
      console.log("Cloudinary Upload Result:", result.url);
    }
  }
);

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // console.log("File uploaded on Cloudinary:", result.url);
    fs.unlinkSync(localFilePath);
    return result;
  } catch (error) {
    console.error("Cloudinary Upload Failed:", error.message);

    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); // Remove temp file if upload fails
    }

    return null;
  }
};

export { uploadOnCloudinary };
