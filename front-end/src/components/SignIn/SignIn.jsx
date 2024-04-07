/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import ValidateUser from "../../utils/ValidateUser";

const SignIn = () => {
  const [isSignnedUp, setIsSignnedUp] = useState(true);
  const [message, setMessage] = useState(null);
  const handleSignInBtn = () => {
    setIsSignnedUp(!isSignnedUp);
  };
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleValidateUser = () => {
    let errorMessage;
    if (isSignnedUp) {
      errorMessage = ValidateUser(
        null,
        email.current.value,
        password.current.value
      );
    } else {
      errorMessage = ValidateUser(
        userName.current.value,
        email.current.value,
        password.current.value
      );
    }
    if (errorMessage) {
      setMessage(errorMessage);
      return;
    }

    setMessage(null);
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
            ref={userName}
            type="text"
            placeholder="Enter Your Name"
            className="p-2"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Enter Your e-mail"
          className="p-2"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Your password"
          className="p-2"
        />
        <div className="flex flex-col space-x-2">
          <button
            className="bg-black text-white p-2"
            onClick={handleValidateUser}
          >
            {isSignnedUp ? "Sign-In" : "Sign-Up"}
          </button>
          <p className="text-white font-semibold text-sm">{message}</p>
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
