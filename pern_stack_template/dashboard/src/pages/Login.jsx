import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    const accessToken = await auth.currentUser.getIdToken();
    localStorage.setItem('accessToken', accessToken);
  };

  useEffect(() => {
    const unSub = auth.onIdTokenChanged(async (user) => {
      if (user) {
        navigate('/home');
        return;
      }
    });

    return () => {
      unSub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col w-96 space-y-4">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleLoginWithGoogle}
          >
            Login with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
