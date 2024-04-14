/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  const accessToken = sessionStorage.getItem("accessToken");
  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
  }, []);

  return accessToken ? <Component /> : null;
};

export default ProtectedRoute;
