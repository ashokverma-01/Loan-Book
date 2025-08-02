import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard
import Dashboard from "../Pages/Dashboard";

// Import Authentication pages
import Login from "../Pages/Authentication/Login";
import ForgetPasswordPage from "../Pages/Authentication/ForgetPassword";
import Logout from "../Pages/Authentication/Logout";
import Register from "../Pages/Authentication/Register";
import UserProfile from "../Pages/Authentication/user-profile";

// Import Authentication Inner Pages
import Login1 from "../Pages/AuthenticationPages/Login";
import Register1 from "../Pages/AuthenticationPages/Register";
import RecoverPassword from "../Pages/AuthenticationPages/RecoverPassword";
import LockScreen from "../Pages/AuthenticationPages/LockScreen";

// Import Utility Pages
import Maintenance from "../Pages/Utility/Maintenance-Page";
import ComingSoon from "../Pages/Utility/ComingSoon-Page";
import Error404 from "../Pages/Utility/Error404-Page";
import Error500 from "../Pages/Utility/Error500-Page";

//vendor pages
import Vendor from "../Pages/Vendor/index";
import Add from "../Pages/Vendor/Add";

const authProtectedRoutes = [
  //dashboard
  { path: "/dashboard", component: <Dashboard /> },

  //vendor
  { path: "/vendor", component: <Vendor /> },
  { path: "/add", component: <Add /> },

  // Profile
  { path: "/userprofile", component: <UserProfile /> },

  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },

  // Authentication Inner Pages
  { path: "/auth-login", component: <Login1 /> },
  { path: "/auth-register", component: <Register1 /> },
  { path: "/auth-recoverpw", component: <RecoverPassword /> },
  { path: "/auth-lock-screen", component: <LockScreen /> },

  // Utility Pages
  { path: "/pages-404", component: <Error404 /> },
  { path: "/pages-500", component: <Error500 /> },
  { path: "/pages-maintenance", component: <Maintenance /> },
  { path: "/pages-comingsoon", component: <ComingSoon /> },
];

export { authProtectedRoutes, publicRoutes };
