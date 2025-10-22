import React from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  //auth er bikolpo
  const status = true;

  if (status) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default PrivateRoute;
