import { Router } from "express";
import {
  createBlog,
  getBlogs,
  getParticularBlog,
} from "../controllers/blog.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const blogRouter = Router();
blogRouter.route("/createBlog").post(upload.single("photo"), createBlog);
blogRouter.route("/getBlogs").get(getBlogs);
blogRouter.route("/blogRead/:blogId").get(getParticularBlog);

export { blogRouter };
