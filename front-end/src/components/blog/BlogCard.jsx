/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const BlogCard = (props) => {
  const { title, description, photoURL } = props;
  return (
    <div className="w-72 mx-6 bg-white shadow-md overflow-hidden rounded-lg cursor-pointer">
      <img
        className="w-full h-36 object-cover object-center"
        src={photoURL}
        alt="Blog Image"
      />
      <div className="p-4">
        <div className="text-md font-semibold text-gray-800 mb-2">{title}</div>
        <p className="text-gray-600 text-sm mb-2 overflow-hidden">
          {description}
        </p>
        {/* <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Author</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BlogCard;
