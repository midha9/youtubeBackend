import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";

dotenv.config({
  path: "./env",
});

connectDB();
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });