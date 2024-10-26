import { createBrowserRouter } from "react-router-dom";
import Home from "../pages";
import Login from "../pages/login";
import ProtectedHome from "../pages/protected";
import Profile from "../pages/protected/profile";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/protected",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <ProtectedHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
