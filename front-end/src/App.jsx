/* eslint-disable no-unused-vars */
import React from "react";
import SignIn from "./components/SignIn/SignIn";
import Home from "../src/components/MainPage/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/home",
      element: <ProtectedRoute Component={Home}></ProtectedRoute>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
