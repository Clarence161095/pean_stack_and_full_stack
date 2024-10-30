import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { userInfo, isLogin } = useContext(AuthContext) as any;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Đăng xuất thành công");
      navigate("/login");
    } catch (error: any) {
      console.error("Lỗi đăng xuất:", error.message);
    }
  };

  if (!isLogin()) {
    navigate("/login");
    return null;
  }

  console.log(userInfo);

  return (
    <>
      <div className="flex place-content-between">
        <h1 className="text-2xl">Protected Route</h1>
        {userInfo && (
          <div className="flex items-center">
            <img src={userInfo.photoURL} alt="avatar" className="w-10 h-10 rounded-full" />
            <p className="text-lg">{userInfo.displayName}</p>
          </div>
        )}
        <button className="rounded-md bg-red-500 text-white p-2" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <Outlet />
    </>
  );
};
