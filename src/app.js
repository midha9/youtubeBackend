import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.arguments(cors{
    origin: process.env.CORS_ORIGIN,
    credentials: true
})

app.arguments(express.json({limit: "10kb"}))
app.use(express.urlencoded(extended, true, limit, "10kb"))
app.use(express.static("public"))
app.use(cookieParser())
export { app };
