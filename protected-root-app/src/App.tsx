import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.scss";
import { AuthProvider } from "./auth/AuthContext";
import { router } from "./routers/router";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
