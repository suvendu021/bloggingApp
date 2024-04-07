/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center md:mt-[8%] mt-[27%]">
        <button className="bg-black text-white p-2 rounded-lg">
          Create Blog
        </button>
      </div>
    </div>
  );
};

export default Home;
