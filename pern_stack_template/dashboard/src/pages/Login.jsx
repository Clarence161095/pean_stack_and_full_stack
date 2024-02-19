import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import useAuthenticated from '../hooks/useAuthenticated';
import { loginWithAccount, loginWithSSO } from '../services/Auth';

const useLogin = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const { isLogin } = useAuthenticated(setIsLoading);

  if (isLogin) {
    navigate('/home');
  }

  const handleLoginWithAccount = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const email = e.target.email.value;
      const password = e.target.password.value;
      await loginWithAccount(email, password);
      setIsLoading(false);
      navigate('/home');
    } catch (error) {
      setError(error.response.data.message);
      setIsLoading(false);
      localStorage.clear();
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      setIsLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      const accessToken = await auth.currentUser.getIdToken();
      await loginWithSSO(accessToken);
      setIsLoading(false);
      navigate('/home');
    } catch (error) {
      setError(error.response.data.message);
      setIsLoading(false);
      localStorage.clear();
    }
  };

  return {
    handleLoginWithAccount,
    handleLoginWithGoogle,
    isLoading,
    errorMessage: error,
  };
};

const Login = () => {
  const { handleLoginWithAccount, handleLoginWithGoogle, isLoading, errorMessage } = useLogin();

  if (!isLoading) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col w-96 space-y-4">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            {/* Fist Form Login with account */}
            <form onSubmit={handleLoginWithAccount} className="flex flex-col space-y-4">
              <input
                className="border border-gray-300 p-2 rounded"
                type="text"
                placeholder="Email"
                id="email"
              />
              <input
                className="border border-gray-300 p-2 rounded"
                type="password"
                placeholder="Password"
                id="password"
              />
              {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Login
              </button>
            </form>

            {/* Second Login with Google */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleLoginWithGoogle}
            >
              Login with Google
            </button>

            {/* Or register when dont have account */}
            <div className="flex justify-center">
              <p>
                {`Don't have an account? `}
                <a href="/register" className="text-blue-500">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <Loading />;
};

export default Login;
