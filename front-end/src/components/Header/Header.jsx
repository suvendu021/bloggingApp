/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Header = () => {
  const [showMenuBtn, setShowMenuBtn] = useState(true);
  const handleMenu = () => {
    setShowMenuBtn(!showMenuBtn);
  };
  return (
    <div>
      <nav className="bg-black text-white flex justify-between p-3 m-0 h-20">
        <p className="text-2xl font-bold flex items-center">BLOG BRO!!!</p>
        <div className="flex flex-col">
          <span
            className="material-symbols-outlined cursor-pointer flex pt-3 justify-end"
            onClick={handleMenu}
          >
            {showMenuBtn ? "menu" : "close"}
          </span>
          {!showMenuBtn && (
            <div className="bg-gray-500 px-8 rounded-lg py-4 flex flex-col mt-3 overflow-visible ">
              <button className="py-2 px-6  bg-white text-black rounded-lg">
                SignOut
              </button>
              <button className="py-2 px-6 mt-2 bg-white text-black  rounded-lg">
                SignIn
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
