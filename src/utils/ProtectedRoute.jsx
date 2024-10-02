import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userInfo = localStorage.getItem("AuthenticatedUser");
  const loggedInUser = JSON.parse(userInfo)?.userRoles[0];

  if (loggedInUser !== "authenticated") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
