/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER } from "../../utils/Constant";

const BlogCreate = () => {
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const handleCreateBlog = async () => {
    try {
      await axios.post(
        `${SERVER}/api/v1/blogs/createBlog`,
        {
          title: titleRef.current.value,
          description: descriptionRef.current.value,
          photo: imageRef.current.files[0],
        },
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set Content-Type to multipart/form-data
          },
        }
      );
      navigate("/home");
    } catch (error) {
      console.error("Blog Upload error:", error);
      // Handle errors from the backend API
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrMessage(error.response.data.message);
      } else {
        setErrMessage("An error occurred. Please try again later.");
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="md:w-1/2 w-4/5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        encType="multipart/form-data"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            ref={titleRef}
            placeholder="Enter title"
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            ref={descriptionRef}
            placeholder="Enter description"
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input
            ref={imageRef}
            type="file"
            accept="image/*"
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight "
          />
        </div>
        <p className="p-1 text-xs font-mono font-semibold">*{errMessage}</p>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded "
            type="button"
            onClick={handleCreateBlog}
          >
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogCreate;
