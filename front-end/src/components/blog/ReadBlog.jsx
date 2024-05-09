/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useFetchParticularBlog } from "../hooks/useFetchParticularBlog";
import { SERVER } from "../../utils/Constant";
import UpdateBlog from "./UpdateBlog";
import axios from "axios";
import toast from "react-hot-toast";

const ReadBlog = () => {
  const idData = useParams();
  const blogId = idData.blogId;
  // console.log(blogId);
  const navigate = useNavigate();
  const currentBlog = useFetchParticularBlog(blogId);

  // console.log(currentBlog);

  const handleBlogDelete = async () => {
    const data = await axios.delete(`${SERVER}/api/v1/blogs/delete/${blogId}`);
    navigate("/home");
    toast.success("successfully blog deleted");
  };

  if (!currentBlog) {
    return null;
  }
  const { title, description, photo, author } = currentBlog?.data;
  return (
    <div className="md:w-1/2 w-4/5 min-h-80 py-6 px-4  md:mt-[8%] mt-[16%] mx-auto border shadow bg-slate-100 ">
      <h2 className="font-semibold font-serif uppercase text-4xl text-center">
        {title}
      </h2>

      <div className="p-1 mt-6  mb-4">
        <img
          className="w-28 float-right m-2  rounded-md"
          src={photo}
          alt="blog-photo"
        />
        <p className="font-mono ">{description}</p>
        <p className="flex items-end font-semibold mt-20 justify-end font-mono">
          author: {author}
        </p>
      </div>
      {author === localStorage.getItem("username") && (
        <div className="flex justify-end space-x-2 mt-2">
          <button
            className="px-4 py-2 text-white rounded-md bg-slate-500 hover:bg-slate-600"
            onClick={handleBlogDelete}
          >
            Delete
          </button>
          <Link to={`/update/${blogId}`}>
            <button className="px-4 py-2 text-white rounded-md bg-slate-500 hover:bg-slate-600">
              Update
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ReadBlog;
