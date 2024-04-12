import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corsOptions = {
  origin: "https://blogging-app-zeta.vercel.app", // Allow requests only from this origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Enable CORS with the defined options
app.use(cors(corsOptions));

app.use(cookieParser());

app.use(express.json({ limit: "10kb" }));

app.use(express.urlencoded({ limit: "10kb", extended: true }));

app.use(express.static("public"));

import { userRouter } from "./routers/user.router.js";
import { blogRouter } from "./routers/blog.router.js";

app.use("/api/v1/users", userRouter);

app.use("/api/v1/blogs", blogRouter);

export { app };
