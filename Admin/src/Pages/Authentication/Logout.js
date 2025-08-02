import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = React.useState(false);

  useEffect(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setIsLoggedOut(true);
  }, []);

  if (isLoggedOut) {
    return <Navigate to="/login" />;
  }

  return <></>;
};

export default Logout;
