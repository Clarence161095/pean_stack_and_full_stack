import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { auth } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();
  const { isLogin, isLoading } = useContext(AuthContext) as any;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isLogin()) {
    navigate("/protected");
  }

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // TODO: Lưu thông tin user vào Cookie bằng cách gửi request lên server
      console.log("Đăng nhập thành công:", user);
      console.log("Token:", await user.getIdToken());
      return user;
    } catch (error: any) {
      console.error("Lỗi đăng nhập:", error.message);
    }
  };

  const handleLogin = () => {
    const user = handleGoogleLogin();
    if (!user) {
      return;
    }
    navigate("/protected");
  };

  return (
    <div className="flex flex-col items-center">
      <h2>Đăng nhập</h2>
      <button className="rounded-md bg-blue-500 text-white p-2" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
