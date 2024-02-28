import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { loginWithSSO } from '../../services/login';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import useAuthenticated from './useAuthenticated';
import { LoginUserContext } from '../../layouts/RootLayout';

function useLogin() {
  const { setIsLoading } = useContext(LoginUserContext);
  const [error, setError] = useState('');
  const auth = getAuth();
  const navigate = useNavigate();

  const { isLogin } = useAuthenticated();

  if (isLogin) {
    navigate('/home');
  }

  const handleLoginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      const accessToken = await auth.currentUser.getIdToken();
      await loginWithSSO(accessToken, 'google');
      setIsLoading(false);
      navigate('/home');
    } catch (error) {
      setIsLoading(false);
      setError(error?.response?.data?.message);
      localStorage.clear();
    }
  };

  return {
    handleLoginWithGoogle,
    error,
  };
}

export default useLogin;
