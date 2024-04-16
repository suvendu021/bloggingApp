import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadToCloudinary } from "../utils/Cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Blog } from "../models/blog.model.js";

const createBlog = AsyncHandler(async (req, res) => {
  //------------create blog------------------------

  // first user login or not
  //blogtitle, description, author name check whether present or not,
  //get localfilepath of blog image from req.file
  //check wheather present or not
  //upload to cloudinary
  //get responce from cloudinary
  //create blog object with title, description, author name and image url
  //send to frontend as response
  const { title, description, author } = req.body;

  if ([title, description, author].some((field) => field.trim() === "")) {
    throw new ApiError(401, "every field required !!!");
  }
  const localFilePath = req.file?.path;
  if (!localFilePath) {
    throw new ApiError(401, "plz upload a image");
  }
  const response = await uploadToCloudinary(localFilePath);
  if (!response) {
    throw new ApiError(500, "something went wrong during image upload !!");
  }
  const blog = await Blog.create({
    title: title,
    description: description,
    photo: response.url,
    author: author,
  });

  const createdBlog = await Blog.findOne(blog._id);

  if (!createBlog) {
    throw new ApiError(500, "somthing went wrong during creating blog");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "successfully blog uploaded", createdBlog));
});

const getBlogs = AsyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  // console.log(blogs);

  if (!blogs) {
    throw new ApiError(500, "no blogs present !!!");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "get blogs successfully", blogs ? blogs : ""));
});

const getParticularBlog = AsyncHandler(async (req, res) => {
  const { blogId } = req.params;
  // console.log(blogId);
  if (!blogId) {
    throw new ApiError(400, "blogId not present in blog ");
  }

  const result = await Blog.findById(blogId);
  if (!result) {
    throw new ApiError(500, "no blog found related ti this id");
  }
  // console.log(result);
  return res
    .status(200)
    .json(new ApiResponse(200, "get blog successfully !!", result));
});

const updateBlog = AsyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (title?.trim() === "" && description?.trim() === "") {
    throw new ApiError(401, "at least one field is require to update blog");
  }

  let updatedBlog;
  const { blogId } = req.params;
  const localFilePath = req.file?.path;
  if (localFilePath) {
    const response = await uploadToCloudinary(localFilePath);
    updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $set: {
          title: title,
          description: description,
          photo: response.url,
        },
      },
      {
        new: true,
      }
    );
  } else {
    updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $set: {
          title: title,
          description: description,
        },
      },
      {
        new: true,
      }
    );
  }

  if (!updatedBlog) {
    throw new ApiError(401, "blog not found i.e invalid request");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "blog is updated successfully", updatedBlog));
});

const deleteBlog = AsyncHandler(async (req, res) => {
  const { blogId } = req.params;
  const blog = await Blog.findById(blogId);
  if (!blog) {
    return new ApiError(401, "unauthorize request to delete blog");
  }
  await Blog.deleteOne({ _id: blog._id });
  return res
    .status(200)
    .json(new ApiResponse(200, "blog successfully deleted"));
});

export { createBlog, getBlogs, getParticularBlog, updateBlog, deleteBlog };
