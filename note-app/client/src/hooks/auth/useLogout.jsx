import { getAuth, signOut } from 'firebase/auth';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginUserContext } from '../../layouts/RootLayout';
import { logout } from '../../services/login';

function useLogout() {
  const { setIsLoading } = useContext(LoginUserContext);
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      await logout();
      localStorage.clear();
      setIsLoading(false);
      navigate('/login');
    } catch (error) {
      setIsLoading(false);
    }
  };

  return {
    handleLogout,
  };
}

export default useLogout;
