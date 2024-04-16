/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white py-6 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm font-mono font-semibold">
          &copy; {new Date().getFullYear()} Suvendu Kumar Sahoo
        </p>
      </div>
    </div>
  );
};

export default Footer;
