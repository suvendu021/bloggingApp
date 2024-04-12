/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { useFetchParticularBlog } from "../hooks/useFetchParticularBlog";

const ReadBlog = () => {
  const idData = useParams();
  const blogId = idData.blogId;
  // console.log(blogId);
  const currentBlog = useFetchParticularBlog(blogId);

  // console.log(currentBlog);

  if (!currentBlog) {
    return null;
  }
  const { title, description, photo } = currentBlog?.data;
  return (
    <div className="md:w-1/2 w-4/5 min-h-80 py-6 px-4  md:mt-[8%] mt-[16%] mx-auto border shadow bg-slate-100">
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
      </div>
    </div>
  );
};

export default ReadBlog;
