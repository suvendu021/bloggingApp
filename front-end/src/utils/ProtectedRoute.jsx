/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const cookies = new Cookies();
  const accessToken = cookies.get("accessToken");

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
  }, []);

  return accessToken ? <Component /> : null;
};

export default ProtectedRoute;
