/* eslint-disable no-unused-vars */
import React from "react";

const LoadingEffect = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="flex space-x-2">
        <div className="w-6 h-6 rounded-full bg-blue-500 animate-bounce"></div>
        <div className="w-6 h-6 rounded-full bg-red-500 animate-bounce"></div>
        <div className="w-6 h-6 rounded-full bg-green-500 animate-bounce"></div>
      </div>
    </div>
  );
};

export default LoadingEffect;
