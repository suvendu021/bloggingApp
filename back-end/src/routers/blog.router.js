import { Router } from "express";
import {
  createBlog,
  getBlogs,
  getParticularBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blog.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const blogRouter = Router();
blogRouter.route("/createBlog").post(upload.single("photo"), createBlog);
blogRouter.route("/getBlogs").get(getBlogs);
blogRouter.route("/blogRead/:blogId").get(getParticularBlog);
blogRouter.route("/update/:blogId").patch(upload.single("photo"), updateBlog);
blogRouter.route("/delete/:blogId").delete(deleteBlog);

export { blogRouter };
