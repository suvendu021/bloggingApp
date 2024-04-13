/* eslint-disable no-unused-vars */
import React from "react";

const ShimmerUI = () => {
  return (
    <div>
      <div className="w-72 h-64 mx-6 bg-slate-200 shadow hover:shadow-md p-2 overflow-hidden rounded-lg cursor-pointer">
        <div className="w-full h-36 bg-slate-300 animate-pulse rounded-md shadow border object-cover object-center"></div>
      </div>
    </div>
  );
};

export default ShimmerUI;
