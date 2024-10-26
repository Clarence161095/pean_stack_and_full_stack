import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { logout, isLogin } = useContext(AuthContext);

  useEffect(() => {
    if (!isLogin()) {
      logout();
      navigate("/login");
    }
  }, [isLogin, logout, navigate]);

  if (!isLogin()) {
    return null;
  }

  return (
    <>
      <div className="flex place-content-between">
        <h1 className="text-2xl">Protected Route</h1>
        <button className="rounded-md bg-red-500 text-white p-2" onClick={logout}>
          Logout
        </button>
      </div>
      <Outlet />
    </>
  );
};
