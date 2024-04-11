import { Router } from "express";
import { createBlog, getBlogs } from "../controllers/blog.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const blogRouter = Router();
blogRouter.route("/createBlog").post(upload.single("photo"), createBlog);
blogRouter.route("/getBlogs").get(getBlogs);

export { blogRouter };
