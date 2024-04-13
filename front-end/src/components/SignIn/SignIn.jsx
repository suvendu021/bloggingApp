/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import ValidateUser from "../../utils/ValidateUser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { SERVER } from "../../utils/Constant";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/Slices/userSlice";

const SignIn = () => {
  const [isSignnedUp, setIsSignnedUp] = useState(true);
  const [message, setMessage] = useState(null);
  const handleSignInBtn = () => {
    setIsSignnedUp(!isSignnedUp);
  };
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = cookies.get("accessToken");
    if (accessToken) {
      navigate("/home");
    }
  }, []);

  const handleValidateUser = async () => {
    let errorMessage;
    if (isSignnedUp) {
      errorMessage = ValidateUser(
        null,
        emailRef.current.value,
        passwordRef.current.value
      );
    } else {
      errorMessage = ValidateUser(
        userNameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
    }

    if (errorMessage !== null) {
      setMessage(`*${errorMessage}`);
      return;
    }
    setMessage(null);

    if (isSignnedUp) {
      // For sign-in, call the login endpoint
      try {
        const response = await axios.post(`${SERVER}/api/v1/users/login`, {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });
        // console.log(response);
        // Handle successful login (redirect, set cookies, etc.)
        const { username } = response.data.message.loggedInUser;
        const { accessToken } = response.data.message;
        sessionStorage.setItem("username", username);
        const user = sessionStorage.getItem("username");
        dispatch(addUser(user));
        cookies.set("accessToken", accessToken);
        navigate("/home");
      } catch (error) {
        console.error("Login error:", error);
        // Handle errors from the backend API
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setMessage(`*${error.response.data.message}`);
        } else {
          setMessage("An error occurred. Please try again later.");
        }
      }
    } else {
      // For sign-up, call the register endpoint
      try {
        await axios.post(`${SERVER}/api/v1/users/register`, {
          username: userNameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });
        setMessage("Your Acoount is Created. Plz Click SignIn");
      } catch (error) {
        console.error("Login error:", error);
        // Handle errors from the backend API
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setMessage(`*${error.response.data.message}`);
        } else {
          setMessage("An error occurred. Please try again later.");
        }
      }
    }
  };
  return (
    <div>
      <Header />
      <form
        encType="multipart/form-data"
        className="bg-slate-500 md:mt-[5%] mt-[27%] mx-auto w-9/12 space-y-5 md:w-1/3 px-6 pt-8 pb-10 mb-8 flex flex-col justify-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2 className="text-white text-2xl font-semibold">
          {isSignnedUp ? "Sign-In" : "Sign-Up"}
        </h2>
        {!isSignnedUp && (
          <input
            ref={userNameRef}
            type="text"
            placeholder="Enter Your Name"
            className="p-2"
          />
        )}
        <input
          ref={emailRef}
          type="email"
          placeholder="Enter Your e-mail"
          className="p-2"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter Your password"
          className="p-2"
        />
        <div className="flex flex-col space-x-2">
          <button
            type="button"
            className="bg-black text-white p-2"
            onClick={handleValidateUser}
          >
            {isSignnedUp ? "Sign-In" : "Sign-Up"}
          </button>
          <p className="text-white font-semibold font-mono text-sm">
            {message}
          </p>
        </div>

        <p className="text-white cursor-pointer" onClick={handleSignInBtn}>
          {isSignnedUp
            ? "New to App ? Sign-Up"
            : "Already have an account ? Sign-In"}
        </p>
      </form>
    </div>
  );
};

export default SignIn;
