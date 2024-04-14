import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json({ limit: "10kb" }));

app.use(express.urlencoded({ limit: "10kb", extended: true }));

app.use(express.static("public"));

import { userRouter } from "./routers/user.router.js";
import { blogRouter } from "./routers/blog.router.js";

app.use("/api/v1/users", userRouter);

app.use("/api/v1/blogs", blogRouter);

export { app };
