/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../Redux/Slices/userSlice";
import { SERVER } from "../../utils/Constant";

const Header = () => {
  const { user } = useSelector((store) => store.user);
  // console.log(user);
  const [showMenuBtn, setShowMenuBtn] = useState(true);
  const handleMenu = () => {
    setShowMenuBtn(!showMenuBtn);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cookies = new Cookies();
  const api = axios.create({
    baseURL: SERVER,
    withCredentials: true,
  });
  const handlesignOut = async () => {
    try {
      await api.post("/api/v1/users/logout");
      cookies.remove("accessToken");
      dispatch(removeUser());
      sessionStorage.removeItem("username");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div>
      <nav className="bg-black text-white flex justify-between p-3 m-0 h-20">
        <p className="text-2xl font-bold flex items-center">BLOG BRO!!!</p>
        {user && (
          <div className="flex flex-col">
            <span
              className="material-symbols-outlined cursor-pointer flex pt-3 justify-end"
              onClick={handleMenu}
            >
              {showMenuBtn ? "menu" : "close"}
            </span>
            {!showMenuBtn && (
              <div className="bg-gray-500 px-5 rounded-lg py-3  flex flex-col mt-3 overflow-visible ">
                <div className=" m-1 text-xs font-semibold flex justify-center items-center">
                  WELCOME
                </div>
                <div className="font-semibold m-2">{user}</div>
                <button
                  className="py-2 px-3  bg-white text-black rounded-lg"
                  onClick={handlesignOut}
                >
                  SignOut
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
