/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import SignIn from "./components/SignIn/SignIn";
import Home from "../src/components/MainPage/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import BlogCreate from "./components/blog/BlogCreate";
import ReadBlog from "./components/blog/ReadBlog";
import { useDispatch } from "react-redux";
import { addUser } from "./components/Redux/Slices/userSlice";
const App = () => {
  const username = localStorage.getItem("username");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUser(username));
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/home",
      element: <ProtectedRoute Component={Home}></ProtectedRoute>,
    },
    {
      path: "/blog",
      element: <ProtectedRoute Component={BlogCreate}></ProtectedRoute>,
    },
    {
      path: "/blogRead/:blogId",
      element: <ProtectedRoute Component={ReadBlog}></ProtectedRoute>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
