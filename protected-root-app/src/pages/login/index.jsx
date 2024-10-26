import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, isLogin } = useContext(AuthContext);

  useEffect(() => {
    if (isLogin()) {
      navigate("/protected");
    }
  }, [isLogin, navigate]);

  const handleLogin = () => {
    // TODO: do something for check login
    login({ display_name: "Linh", email: "linh@1.co" });
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
