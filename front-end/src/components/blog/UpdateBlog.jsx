/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER } from "../../utils/Constant";
import axios from "axios";

const UpdateBlog = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const handleSaveBlog = async () => {
    try {
      const data = {};

      if (titleRef.current && titleRef.current.value) {
        data.title = titleRef.current.value;
      }

      if (descriptionRef.current && descriptionRef.current.value) {
        data.description = descriptionRef.current.value;
      }

      if (
        imageRef.current &&
        imageRef.current.files &&
        imageRef.current.files[0]
      ) {
        // If image is present, set it to the file object
        data.photo = imageRef.current.files[0];
      }

      if (Object.keys(data).length > 0) {
        // Send the data only if there is at least one field with a value
        await axios.patch(`${SERVER}/api/v1/blogs/update/${blogId}`, data);
        navigate("/home");
      } else {
        setErrMessage("plz enter atleast one field to update it !!!");
      }
    } catch (error) {
      console.error("Blog Upload error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrMessage(`*${error.response.data.message}`);
      } else {
        setErrMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
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
        <p className="p-1 text-red-500 text-xs font-mono font-semibold">
          {errMessage}
        </p>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded "
            type="button"
            onClick={handleSaveBlog}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;
