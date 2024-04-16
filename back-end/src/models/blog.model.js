import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      require: true,
      trim: true,
      lowerCase: true,
    },
  },
  { timestamps: true }
);
export const Blog = mongoose.model("Blog", blogSchema);
